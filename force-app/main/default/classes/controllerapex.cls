public with sharing class controllerapex {

    @AuraEnabled(cacheable=true)
    public static List<Case> method() {
        List<Case> cases = [SELECT 	ContactId,Contact.Name, Priority,Origin, Status FROM Case];
        return cases;
    }

    @AuraEnabled(cacheable=true)
    public static list<account> accmethod(){
    
        list<account> ac = [select Id,Name,Industry,AnnualRevenue,Total_contacts__c from account];
        
        return ac;
    }

    @AuraEnabled(cacheable=true)
        public static list<account> searchmethod( string n){
            list<account>  acs = [Select Name,Industry,Total_contacts__c from account where Name like:('%'+ n +'%')];
            return acs;
        }
// Hello Mic Check 
        @AuraEnabled()
        public static string delaccount( string aid){
            account acs;
            try{
                acs = [Select Id,Name,Industry,Total_contacts__c from account where id =:aid];
                delete acs;
                }
            catch(Exception e){
                throw new AuraHandledException(e.getMessage());
            }          
            return 'Account '+acs.Name+ ' deleted account Id '+acs.Id;   
        }
    }
                 
