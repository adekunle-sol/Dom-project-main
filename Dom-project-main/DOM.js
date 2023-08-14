const add_input = document.querySelector('.add_input');
const add_btn = document.querySelector('#add_btn');
const error = document.querySelector('.error');
const item_lists = document.querySelector('.item_lists');

function add_item() {
    if (add_input.value === '') {
        //alert('You cannot submit an empty field!');
        error.classList.remove('d-none');

        //setTimeout(function, duration);
        setTimeout(function () {
            error.classList.add('d-none');
        }, 3000); // 3000 miliseconds

        return;
    }

    //create elements
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');


    //add classes
    li.classList.add('border', 'border-1', 'clearfix', 'align-center', 'p-2', 'justify-content-between');
    span.classList.add('fw-bold', 'float-start');
    button.classList.add('btn', 'float-end', 'btn-sm', 'btn-danger', 'text-white');

    //createTextNode
    let text = add_input.value;
    text = text.substring(0, 1).toUpperCase() + text.substring(1);
    let new_item = document.createTextNode(text);
    let btn_text = document.createTextNode('x');

    //add type
    button.type = 'button';

    //append child
    button.appendChild(btn_text);
    span.appendChild(new_item);
    li.appendChild(span);
    li.appendChild(button);

    //another way to create elements
    //document.innerHTML += ` <li class="border border-1 clearfix align-center p-2 justify-content-between">
    //                            <span class="fw-bold float-start">Item 1</span>
    //                            <button type="button" class="btn float-end btn-sm btn-danger text-white">x</button>
     //                   </li>`
    
    item_lists.appendChild(li);

    add_input.value = '';
}


add_btn.addEventListener('click', add_item);