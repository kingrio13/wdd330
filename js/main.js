

const links = [
    {
      label: "Week 1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 notes",
      url: "week2/index.html"
    },
    {
      label: "Challenge Week 2",
      url: "challenge"
    }
  ]



let ai;
for (ai=0; ai<links.length; ai++){
  let li= document.createElement('li');
  let ali=document.createElement('a');
ali.textContent=links[ai].label;
ali.setAttribute('href', links[ai].url);
li.appendChild(ali);

console.log(li)
document.querySelector('#tablecontent').appendChild(li);
}
