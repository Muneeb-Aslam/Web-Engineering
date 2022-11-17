let btn = document.getElementById('btn');

function deleteitem(child){
    child.remove();
}
btn.addEventListener('click',(e)=>{
    let list = document.getElementById('list').value;
    let ul = document.getElementById('ul');
    let li = document.createElement("li");
    ul.append(li);
    li.innerHTML=list;
    li.className="list-item";
    li.style.cursor="pointer";
    li.addEventListener('click',(e)=>{deleteitem(e.target)});
});
