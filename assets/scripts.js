function emailLink(emailaddress, subject) {
	subject = subject !== undefined && typeof (subject) == 'string' ? '?subject=' + encodeURIComponent(subject) : '';
	parent.location = 'mai'+'l' + "t" + "o" + ':' + emailaddress + subject;
}



