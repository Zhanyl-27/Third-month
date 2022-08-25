sendform = document.getElementById("sendform");
errortext = document.getElementById("error");

sendform.addEventListener("submit", function(event)
	{
		event.preventDefault();
		let formData = new FormData(sendform);
		let email = formData.get("email");
		if(email.includes("@"))
		{
			let emailName = email.split("@")[0];
			if(emailName.length > 3)
			{
				email = email.split("@")[1];
				if(email.includes("."))
				{
					let domenPath = email.split(".");
					let haveText = true;
					domenPath.forEach(function(item, i, arr) 
					{
  						if(item.length < 2)
  						{
  							haveText = false;
  						}
					});

					if(haveText)
					{
						errortext.style.display = "none";
						alert("Вы успешно зарегистрировались!");
					}
					else
					{
						errortext.innerHTML = "E-mail некорректен. Домен некорректен";
						errortext.style.display = "block";
					}
				}
				else
				{
					errortext.innerHTML = "E-mail некорректен. Домен должен иметь '.'";
					errortext.style.display = "block";
				}
			}
			else
			{
				errortext.innerHTML = "Не корректный формат почты";
				errortext.style.display = "block";
			}
		}
		else
		{
			errortext.innerHTML = "Не корректный формат почты";
			errortext.style.display = "block";
		}
	}
);