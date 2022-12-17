{
    const tasks = [
        {
            content: "Testowe zadanie numer 1",
            done: false,
        },
        {
            content: "Testowe zadanie numer 2",
            done: true,
        },
    ]

    const render = () =>{
        let htmlString = "";
        
        for (const task of tasks) {
            htmlString += `
            <li>
                ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-list").innerHTML = htmlString;
    };



    const init = () => {
        render();

    };

    init();
}