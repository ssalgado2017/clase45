var asdf = [{
			"completed":false,
			"id":1,
			"title":"Delectus aut autem",
		},
		{
			"completed":false,
			"id":2,
			"title":"Quis ut nam facilis et officia qui",
		},
		{
			"completed":false,
			"id":3,
			"title":"Fugiat veniam minus",
		},
		{
			"completed":true,
			"id":4,
			"title":"Et porro tempora",
		},
		{
			"completed":false,
			"id":5,
			"title":"Laboriosam mollitia et enim quasi adipisci quia provident illum",
		},
		{
			"completed":false,
			"id":6,
			"title":"Qui ullam ratione quibusdam voluptatem quia omnis",
		},
		{
			"completed":false,
			"id":7,
			"title":"Illo expedita consequatur quia in",
			"userId":1
		},
		{
			"completed":true,
			"id":8,
			"title":"Quo adipisci enim quam ut ab",
		},
		{
			"completed":false,
			"id":9,
			"title":"Molestiae perspiciatis ipsa",
		},
		{
			"completed":true,
			"id":10,
			"title":"Illo est ratione doloremque quia maiores aut",
		}];


    function completeTask(id){
      item = document.getElementById(id);
      list = document.getElementById('done');
      item.removeAttribute("onclick");
      list.appendChild(item);
    }

    asdf.map(function sortList(x){
      var item = document.createElement('li');
      var contenido = document.createTextNode(x['title']);
      item.id = x['id'];
      item.appendChild(contenido);
      var comDone = "completeTask(" + x['id'] + ")";

      if (x['completed']){
        list = document.getElementById('done');
        list.appendChild(item);
      } else {
        list = document.getElementById('todo');

        var att = document.createAttribute("onclick");
        att.value = comDone;
        item.setAttributeNode(att);

        list.appendChild(item);
      }
    });