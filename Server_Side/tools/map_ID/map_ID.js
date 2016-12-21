'use strict';

let participants = require(__dirname+'/../../blockchain/participants/participants_info.js');


let id_to_user = function(data)
{
    for(let role in participants)
    {
        for(let j = 0; j < participants[role].length; j++)
        {
            if(participants[role][j].identity === data)
            {
                return participants[role][j].name;
            }
        }
    }
};

let user_to_id = function(data)
{
	let participant=participants.participants_info
    for(let role in participant)
    {
		console.log('key rolw',role);
       
        for(let j = 0; j < participant[role].length; j++)
        {
			console.log('key rolw j',participant[role][j]);
       
            if(participant[role][j].name === data)
            {
                return participant[role][j].identity;
            }
        }
    }
};

let get_password = function(partType, data)
{
    for(let i = 0; i < participants[partType].length; i++)
    {
        if(participants[partType][i].name === data || participants[partType][i].identity === data)
        {
            return participants[partType][i].password;
        }
    }
};



exports.id_to_user = id_to_user;
exports.user_to_id = user_to_id;
exports.get_password = get_password;
