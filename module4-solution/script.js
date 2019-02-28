(function () {
	var name=["Himanshu","Anshu","Juhi","Sachin","Suman","Jayant","Yaakov","Jay","Mithun","Bipul","Jasmaine"];
	for(var i=0;i<name.length;i++)
	{
		var first_letter=name[i].charAt(0).toLowerCase();
		if(first_letter==='j')
		{
			byehimu.tell(name[i]);
		}
		else
		{
			hellohimu.tell(name[i]);
		}
	}
})();