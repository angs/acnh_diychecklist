$(document).ready(function(){
  for (var i of diylist){
		var container = $('<div>').addClass("category");
	  var item = $('<h1/>').addClass("cat").text(i.category);
    container.append(item);
    var item = $('<ul>');
		  for (var j of i.diys){
			  var item2 = $('<li>');
			  item2.append($('<input>').addClass("boksi").attr('type','checkbox').attr('id',j.replace(/[^A-Za-z_\n]+/g,"_").toLowerCase()));
				item2.append($('<label>').addClass("name").text(j));
				item.append(item2);
			}
    container.append(item);
    $("#main").append(container);
	}
});
