//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

contract TaskContract {

    // id para las tareas
    uint public taskCounter = 0;


    //ejecuta porción de código cuando se ejecuta por primera vez el contrato
    // tipo un componentDidMount
    constructor (){
        createTask("My First Task", "Practicing Solidity");
    }

    //eventos
    event TaskCreated(
        uint id,
        string title,
        string description,
        bool done,
        uint256 createdAt
    );

    event ToggleDone(uint id, bool done);

    //tipo interface en Typescript
    struct Task{
        uint id;
        string title;
        string description;
        bool done;
        uint256 createdAt;
    }
    //propiedad importante (tipo primaryKey)
    mapping (uint256 => Task) public tasks; 
        
                                                                        
    function createTask(string memory _title, string memory _description) public {
        taskCounter++;
        tasks[taskCounter] = Task(taskCounter, _title, _description, false, block.timestamp);
        emit TaskCreated(taskCounter, _title, _description, false, block.timestamp);
    }

    function toggleDone(uint _id) public {
       Task memory _task = tasks[_id];
        _task.done =!_task.done;
        tasks[_id] = _task;
        emit ToggleDone(_id, _task.done);
    }

}