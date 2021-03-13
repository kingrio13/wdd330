

const links = [
    {
      label: "Week 1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 Notes",
      url: "week2/index.html"
    },
    {
      label: "Week 3 Notes",
      url: "week3/index.html"
    },
    {
        label: "Week 4 Notes",
        url: "week4/index.html"
      },
      {
        label: "Week 5 Note",
        url: "week5/index.html"
      },
      {
        label: "Week 6",
        url: "week6/todo/index.html"
      },
      {
        label: "Week 7",
        url: "week7/index.html"
      },
      {
        label: "Week 8",
        url: "week8/index.html"
      },
      {
        label: "Week 9",
        url: "week9/index.html"
      },
      {
        label: "Week 10",
        url: "week10/index.html"
      }
  ]



let ai;
for (ai=0; ai<links.length; ai++){
  let li= document.createElement('li');
  let ali=document.createElement('a');
ali.textContent=links[ai].label;
ali.setAttribute('href', links[ai].url);
li.appendChild(ali);

document.querySelector('#tablecontent').appendChild(li);
}
