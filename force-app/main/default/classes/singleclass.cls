public with sharing class singleclass {
    @AuraEnabled(cacheable=true)
    public static account singleacc(string acid) {
        account ac ;
        ac = [Select Id,Name,AnnualRevenue,Industry,phone,rating from account where id =:acid];
        return ac;

    }
}