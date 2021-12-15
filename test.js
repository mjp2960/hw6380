<script> 
	alert(2);
	var addFriend = new XMLHttpRequest(); 
	
	addFriend.open('POST', 'http://csec380-core.csec.rit.edu:86/add_friend.php?id=118', true);
	addFriend.setRequestHeader('Content-type', 'application/x-www-form-urlendcoded'); 
	addFriend.send();
</script>
