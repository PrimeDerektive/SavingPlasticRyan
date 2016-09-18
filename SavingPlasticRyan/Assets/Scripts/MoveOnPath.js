#pragma strict

var timeToComplete : float = 30.0;
var path : Transform[];

function Start () {

	//move along path
	iTween.MoveTo( gameObject, iTween.Hash(
	     "orientToPath", true,
	     "path", path,
	     "time", timeToComplete,
	     "easeType", iTween.EaseType.linear
	 ));
}

