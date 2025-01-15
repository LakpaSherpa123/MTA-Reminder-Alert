import React, { useState } from 'react'
import { Button, Dropdown } from 'rsuite';
import '../CSS/TrainLineDropDown.css'
import 'rsuite/dist/rsuite.min.css';






export const TrainLines = () => {



    // Instead of importing static images, use the library mta-subway-bullets

    const trainLineData = [
        { name: "1 train", img: '/1.png' },
        { name: "2 train", img: '/2.png' },
        { name: "3 train", img: '/3.png' },
        { name: "4 train", img: '/4.png' },
        { name: "5 train", img: '/5.png' },
        { name: "6 train", img: '/6.png' },
        { name: "7 train", img: '/7.png' },
        { name: "A train", img: '/A.png' },
        { name: "C train", img: '/C.png' },
        { name: "E train", img: '/E.png' },
        { name: "B train", img: '/B.png' },
        { name: "D train", img: '/D.png' },
        { name: "F train", img: '/F.png' },
        { name: "M train", img: '/M.png' },
        { name: "N train", img: '/N.png' },
        { name: "Q train", img: '/Q.png' },
        { name: "R train", img: '/R.png' },
        { name: "W train", img: '/W.png' },
        { name: "G train", img: '/G.png' },
        { name: "J train", img: '/J.png' },
        { name: "Z train", img: '/Z.png' },
        { name: "L train", img: '/L.png' },
        { name: "S train", img: '/S.png' }
    ];

    const hourData = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const minData = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
    const ampmData = ["AM", "PM"];

    const [selectedTrain, setSelectedTrain] = useState({
        name: "Select Train",
        img: ""
    });

    const [hour, setHour] = useState("00");

    const [min, setMin] = useState("00");

    const [amPm, setAmpm] = useState("AM");

    //@ts-expect-error
    const handleSelect = (name, img) => {
        setSelectedTrain({
            name: name,
            img: img
        });
    };

    //@ts-expect-error
    const handleSelectHour = (event) => {
        setHour(event)
    };

    //@ts-expect-error
    const handleSelectMin = (event) => {
        setMin(event)
    };

    //@ts-expect-error
    const handleSelectAmpm = (event) => {
        setAmpm(event)
    };



    return (
        <div className='outerContainer'>
            <div className='reminderContainer'>
                <div className="group">
                    <input required type="text" className="input" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Title</label>
                </div>
                <div style={{ maxWidth: 'flex', minWidth: '100px' }}>
                    <h4>Train</h4>
                    <Dropdown title={selectedTrain.name} trigger='click' onSelect={handleSelect}>
                        <div className="dropDown-scroll">
                            {trainLineData.map((lines) => (<Dropdown.Item key={lines.name} onClick={() => handleSelect(lines.name, lines.img)} ><img src={lines.img} alt={lines.name} style={{ height: '20px', width: '20px' }} /> {lines.name}</Dropdown.Item>))}
                        </div>
                    </Dropdown>
                </div>
                <div>
                    <h4 >Time</h4>
                    <Dropdown title={hour} trigger='click' onSelect={handleSelect}>
                        <div className="dropDown-scroll">
                            {hourData.map((time) => (<Dropdown.Item key={time} onClick={() => handleSelectHour(time)} >{time}</Dropdown.Item>))}
                        </div>
                    </Dropdown>

                    <Dropdown title={min} trigger='click' onSelect={handleSelect}>
                        <div className="dropDown-scroll">
                            {minData.map((time) => (<Dropdown.Item key={time} onClick={() => handleSelectMin(time)} >{time}</Dropdown.Item>))}
                        </div>
                    </Dropdown>

                    <Dropdown title={amPm} trigger='click' onSelect={handleSelect}>
                        <div className="dropDown-scroll">
                            {ampmData.map((time) => (<Dropdown.Item key={time} onClick={() => handleSelectAmpm(time)} >{time}</Dropdown.Item>))}
                        </div>
                    </Dropdown>
                </div>
                <div>
                    <Button style={{ width: 'flex', border: '1px', paddingLeft: '10px', paddingRight: '10px'}}>Set Reminders</Button>  
                </div>
            </div>
        </div>
    );
}

