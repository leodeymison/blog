const Model = (category) => `
    <li class="menu-header small text-uppercase">
        <span class="menu-header-text">${category.name}</span>
    </li>
`
const ModelBody = (body, bodyIndex) => `
    <li class="menu-item">
        <a href="javascript:void(0);" class="menu-link menu-toggle">
            <i class="menu-icon tf-icons bx bx-file-blank"></i>
            <div data-i18n="Account Settings">${body.name}</div>
        </a>
        <ul class="menu-sub" id="addListMenu-item${bodyIndex}"></ul>
    </li>
`

const ModelList = (item, id) => `
    <li class="menu-item">
        <a href="/${id}" class="menu-link">
            <div data-i18n="Account">${item.name}</div>
        </a>
    </li>
`
const addListMenu = document.getElementById("addListMenu");

fetch("/api/categorys").then(res => res.json()).then(data => {
    console.log("respponse: ", data)
    data.forEach(dt => {
        addListMenu.innerHTML += Model(dt)
        dt.body.forEach((bd) => {
            addListMenu.innerHTML += ModelBody(bd, bd._id)
            bd.list.forEach(list => {
                document.getElementById(`addListMenu-item${bd._id}`).innerHTML += ModelList(list, list._id);
            })
        })
    })
})

