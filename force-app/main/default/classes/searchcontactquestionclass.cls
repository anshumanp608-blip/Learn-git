public with sharing class searchcontactquestionclass {

    @AuraEnabled(cacheable=true)
    public static list<contact> searchc(string n) {

         list<contact> c = [select Id,Lastname,email from contact where Lastname LIKE :('%' + n + '%')];
        return c;
        }
}