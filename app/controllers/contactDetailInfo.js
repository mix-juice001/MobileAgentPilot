var args = arguments[0] || {};
var agencyName = args.agency;
var personName = args.person;
var telno1 = args.telno1;
var telno2 = args.telno2;
var mail = args.mail;
var url = args.url;
var memo = args.memo;

$.agency.text = agencyName;
$.person.text = personName;
$.telno1.text = telno1;
$.telno2.text = telno2;
$.mail.text = mail;
$.url.text = url;
$.memo.text = memo;

