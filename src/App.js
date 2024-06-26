import React, { useState } from 'react';

const App = () => {
    const [groupsHTML, setGroupsHTML] = useState('');

    const makeGroups = () => {
        const boysArray = [
            "Sergej Matković", "Đorđe Gajić", "Jovan Šovljanski", "Rajan Nikić", "Andrej Nedeljkov",
            "Nemanja Sorajić", "Maksim Malbaša", "Aleksa Premović", "Vukašin Jeličić",
            "Luka Ćirić", "Matija Tukodi", "Kristian Šubonj", "Luka Miljuš", "Marko Simović", "Aleksandar Špirić", "Nikita Aleksejev", "Aleksa Dragosavljević"
        ];

        const girlsArray = [
            "Srna Matković", "Sara Rističević", "Sara Koprivica", "Anđela Vapa"
        ];

        console.log("Boys array after shuffle: ", boysArray);
        console.log("Girls array after shuffle: ", girlsArray);


        shuffleArray(girlsArray);
        shuffleArray(boysArray);

        const numGroups = 4;
        const groupSize = 5;
        let newGroupsHTML = "";

        for (let i = 0; i < numGroups; i++) {
            let groupMembers = "";
            let girlsInGroup = 0;
            const currentGroupSize = (i === numGroups - 1) ? groupSize + 1 : groupSize;

            for (let j = 0; j < currentGroupSize; j++) {
                if (girlsInGroup < 1 && girlsArray.length > 0) {
                    const girl = girlsArray.shift();
                    groupMembers += girl + " (Girl)<br>";
                    girlsInGroup++;
                } else {
                    if (boysArray.length > 0) {
                        groupMembers += boysArray.shift() + "<br>";
                    }
                }
            }
            newGroupsHTML += "<div><strong>Group " + (i + 1) + ":</strong><br>" + groupMembers + "</div>";
        }
        console.log("New groups HTML: ", newGroupsHTML);


        setGroupsHTML(newGroupsHTML);

    };
        const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    };

    const styles = `
        body {
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 10px;
        }

        input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #0056b3;
        }

        .groups {
            margin-top: 20px;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="container">
                <button onClick={makeGroups}>Submit</button>
                <div className="groups" dangerouslySetInnerHTML={{ __html: groupsHTML }}></div>
            </div>
        </>
    );
};

export default App;
