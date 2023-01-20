
let dropdown = document.getElementsByClassName("dropdown-button");
let i;

for (i = 0; i < dropdown.length; i++) 
{
    dropdown[i].addEventListener("click", function() 
    {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") 
        {
            dropdownContent.style.display = "none";
        } 
        else 
        {
            dropdownContent.style.display = "block";
        }
    });
}

let goToMainBtn = document.getElementById("main-btn");

goToMainBtn.addEventListener("click", function()
    {
        window.location.href = 'main.html';
    }
);