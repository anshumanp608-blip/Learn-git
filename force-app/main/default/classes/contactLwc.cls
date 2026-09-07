public with sharing class contactLwc {
    
    @AuraEnabled
    public static string crContact(String cf,string cl,string cp,string ce,string ca){
        Contact cc = new Contact() ;
        try {
         cc.firstName =cf;
         cc.lastName = cl;
         cc.phone = cp;
         cc.email = ce;
         cc.AccountId = ca;
         insert cc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return 'Record for '+cc.firstname+' got inserted.. :) with id : '+cc.Id;
    }
    //method to delete => called imperatively

    @AuraEnabled
    public static string delContact(String conId){
        Contact cc ;
        try {
         cc=  [select id,firstname from Contact where id = :conId];
         delete cc;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return 'Record for '+cc.firstname+' got deleted.. :)';
    }
    //method which will fetch records from salesforce and privde thn to lwc
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllContact(){
        try {
            List<Contact> conList = [select firstname,lastname,email,phone from Contact];
            return conList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getRelContact(string nn){
        try {
            List<Contact> conList;
            if(string.isBlank(nn)){
                conList = [select firstname,lastname,email,phone,Account.name,AccountId from Contact];
            }
            else{
                string str = '%'+nn+'%';
                conList = [select firstname,lastname,email,phone,Account.name,AccountId from Contact where Account.name like :str or firstname like :str];
            }            
            return conList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}