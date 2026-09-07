public with sharing class searchContacts {

    @AuraEnabled(cacheable=true)
    public static list<contact> consearch() {

    list<contact> c = [select Id,Name,LastName,LeadSource,FirstName,email,
    phone,AccountId,Account.Name from contact];
        return c;
    }

     @AuraEnabled
    public static string condel(string n ) {
        try{
         Contact c = [select Id,Name from contact where id =:n];
       delete c;
       return 'Account Deleted' +c.Name + 'With Id' +c.Id ;
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

        @AuraEnabled
        public static string updateac(string np ){
            contact acx;
            try{
                acx = [Select Id,LeadSource,LastName from contact where id=:np];
                acx.LeadSource = 'web';
                 update acx;
                }
            catch(Exception e){
                throw new AuraHandledException(e.getMessage());
            }  
            return 'Lead source updated to WEB for ' + acx.LastName;
}
}