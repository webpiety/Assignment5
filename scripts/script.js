let count = 0;
const callHistoryData = [];

// Function of counting heart click

function ClickCount(id) {
    count++;
    const ttlClickCount = document.getElementById('heart-click');
    ttlClickCount.innerText = count;
    return ttlClickCount;
}
//function of call history record
function callHistory(id) {
    const callHistoryContainer = document.getElementById('call-history-container');
    callHistoryContainer.innerText = " ";
    for (const callDta of callHistoryData) {
        const div = document.createElement('div');
        div.innerHTML = `
             <div id="" class="bg-[#FAFAFA] flex justify-between items-center mt-4 p-4">
                        <div>
                        <h4 class="font-inter text-base font-semibold">${callDta.name}</h4>
                        <p class="font-hind text-base font-normal text-[#5C5C5C]">${callDta.number}</p>
                    </div>
                    <p class="font-hind ext-base font-normal text-[#111111]">${callDta.date}</p>
                </div>`
        console.log(div)
        callHistoryContainer.appendChild(div);
    }

    return;
}

// function of copy phone number
function copyPhoneNumber(id) {
    const phoneNumberEl = document.getElementById(id);
    if (!phoneNumberEl) {
        console.error('Element not found with id:', id);
        return;
    }

    const onlyPhoneNumber = phoneNumberEl.textContent.trim();
    const onlyNumber = onlyPhoneNumber.replace(/\D/g, '');

    navigator.clipboard.writeText(onlyNumber)
        .then(() => {
            alert('Number Copied: ' + onlyNumber);
        })
        .catch(err => {
            console.error('Failed to copy:', err);
        });
}



// click event when click heart in any card
document.getElementById('heart-emergency').addEventListener('click', function () {
    ClickCount('heart-emergency');

})
document.getElementById('heart-police').addEventListener('click', function () {
    ClickCount('heart-police');
})
document.getElementById('heart-fire').addEventListener('click', function () {
    ClickCount('heart-fire');
})
document.getElementById('heart-ambulance').addEventListener('click', function () {
    ClickCount('heart-ambulance');
})
document.getElementById('heart-women').addEventListener('click', function () {
    ClickCount('heart-women');
})
document.getElementById('heart-corruption').addEventListener('click', function () {
    ClickCount('heart-corruption');
})
document.getElementById('heart-electricity').addEventListener('click', function () {
    ClickCount('heart-electricity');
})
document.getElementById('heart-brac').addEventListener('click', function () {
    ClickCount('heart-brac');
})
document.getElementById('heart-railway').addEventListener('click', function () {
    ClickCount('heart-railway');
})

// calling when press call button
document.getElementById('emergency-call-button').addEventListener('click', function () {
    const ttlCoin = parseInt(document.getElementById('total-coin').innerText);


    if (ttlCoin >= 20) {
        const remainingCoin = ttlCoin - 20;
        document.getElementById('total-coin').innerText = remainingCoin
        alert("📞 National Emergency Service 999...")
    }
    else {
        alert("❌ You Don't Have Enough Coins, You Need at Least 20 Coins to Call...");
        return;
    }
    let time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const data = {
        name: "National Emergency Number",
        number: 999,
        date: time
    }

    callHistoryData.unshift(data);
    if (callHistoryData.length > 11) {
        callHistoryData.pop();
    }

    callHistory('call-history-container');
})

document.getElementById('police-call-button').addEventListener('click', function () {
    const ttlCoin = parseInt(document.getElementById('total-coin').innerText);


    if (ttlCoin >= 20) {
        const remainingCoin = ttlCoin - 20;
        document.getElementById('total-coin').innerText = remainingCoin
        alert("📞 Police Emergency Service 999...")
    }
    else {
        alert("❌ You Don't Have Enough Coins, You Need at Least 20 Coins to Call...");
        return;
    }
    let time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const data = {
        name: "Police Service Number",
        number: 999,
        date: time
    }

    callHistoryData.unshift(data);
    if (callHistoryData.length > 11) {
        callHistoryData.pop();
    }

    callHistory('call-history-container');
})

document.getElementById('fire-service-call-button').addEventListener('click', function () {
    const ttlCoin = parseInt(document.getElementById('total-coin').innerText);


    if (ttlCoin >= 20) {
        const remainingCoin = ttlCoin - 20;
        document.getElementById('total-coin').innerText = remainingCoin
        alert("📞 Fire Fighter Service 999...")
    }
    else {
        alert("❌ You Don't Have Enough Coins, You Need at Least 20 Coins to Call...");
        return;
    }
    let time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const data = {
        name: "Fire Fighter Service Number",
        number: 999,
        date: time
    }

    callHistoryData.unshift(data);
    if (callHistoryData.length > 11) {
        callHistoryData.pop();
    }

    callHistory('call-history-container');
})
document.getElementById('Ambulance-call-button').addEventListener('click', function () {
    const ttlCoin = parseInt(document.getElementById('total-coin').innerText);


    if (ttlCoin >= 20) {
        const remainingCoin = ttlCoin - 20;
        document.getElementById('total-coin').innerText = remainingCoin
        alert("📞 Ambulance Service 1994-999999...")
    }
    else {
        alert("❌ You Don't Have Enough Coins, You Need at Least 20 Coins to Call...");
        return;
    }
    let time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const data = {
        name: "Ambulance service Number",
        number: "1994-999999",
        date: time
    }

    callHistoryData.unshift(data);
    if (callHistoryData.length > 11) {
        callHistoryData.pop();
    }

    callHistory('call-history-container');
})
document.getElementById('woman-call-button').addEventListener('click', function () {
    const ttlCoin = parseInt(document.getElementById('total-coin').innerText);


    if (ttlCoin >= 20) {
        const remainingCoin = ttlCoin - 20;
        document.getElementById('total-coin').innerText = remainingCoin
        alert("📞 Woman & Child Service 109...")
    }
    else {
        alert("❌ You Don't Have Enough Coins, You Need at Least 20 Coins to Call...");
        return;
    }
    let time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const data = {
        name: "Woman & Child service Number",
        number: 109,
        date: time
    }

    callHistoryData.unshift(data);
    if (callHistoryData.length > 11) {
        callHistoryData.pop();
    }

    callHistory('call-history-container');
})
document.getElementById('anti-corruption-call-button').addEventListener('click', function () {
    const ttlCoin = parseInt(document.getElementById('total-coin').innerText);


    if (ttlCoin >= 20) {
        const remainingCoin = ttlCoin - 20;
        document.getElementById('total-coin').innerText = remainingCoin
        alert("📞 Anti Corruption Service 106...")
    }
    else {
        alert("❌ You Don't Have Enough Coins, You Need at Least 20 Coins to Call...");
        return;
    }
    let time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const data = {
        name: "Ani-Corruption service Number",
        number: 106,
        date: time
    }

    callHistoryData.unshift(data);
    if (callHistoryData.length > 11) {
        callHistoryData.pop();
    }

    callHistory('call-history-container');
})
document.getElementById('electricity-call-button').addEventListener('click', function () {
    const ttlCoin = parseInt(document.getElementById('total-coin').innerText);


    if (ttlCoin >= 20) {
        const remainingCoin = ttlCoin - 20;
        document.getElementById('total-coin').innerText = remainingCoin
        alert("📞 Emergency Electricity Service 16216...")
    }
    else {
        alert("❌ You Don't Have Enough Coins, You Need at Least 20 Coins to Call...");
        return;
    }
    let time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const data = {
        name: "Electricity service Number",
        number: 16216,
        date: time
    }

    callHistoryData.unshift(data);
    if (callHistoryData.length > 11) {
        callHistoryData.pop();
    }

    callHistory('call-history-container');
})


document.getElementById('brac-call-button').addEventListener('click', function () {
    const ttlCoin = parseInt(document.getElementById('total-coin').innerText);


    if (ttlCoin >= 20) {
        const remainingCoin = ttlCoin - 20;
        document.getElementById('total-coin').innerText = remainingCoin
        alert("📞 Brac Service 16445...")
    }
    else {
        alert("❌ You Don't Have Enough Coins, You Need at Least 20 Coins to Call...");
        return;
    }
    let time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const data = {
        name: "Brac service Number",
        number: 16445,
        date: time
    }

    callHistoryData.unshift(data);
    if (callHistoryData.length > 11) {
        callHistoryData.pop();
    }

    callHistory('call-history-container');
})
document.getElementById('railway-call-button').addEventListener('click', function () {
    const ttlCoin = parseInt(document.getElementById('total-coin').innerText);


    if (ttlCoin >= 20) {
        const remainingCoin = ttlCoin - 20;
        document.getElementById('total-coin').innerText = remainingCoin
        alert("📞 Railway Service 163...")
    }
    else {
        alert("❌ You Don't Have Enough Coins, You Need at Least 20 Coins to Call...")
        return;
    }
    let time = new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    const data = {
        name: "Railway service Number",
        number: 163,
        date: time
    }

    callHistoryData.unshift(data);
    if (callHistoryData.length > 11) {
        callHistoryData.pop();
    }

    callHistory('call-history-container');
})
// Remove Call History
document.getElementById('clear-history-btn').addEventListener('click', function () {
    const callRecord = document.getElementById('call-history-container');
    callRecord.innerHTML = " ";
    callHistoryData.length = 0;
    return;


})
// Copy Number
document.getElementById('emergency-copy-btn').addEventListener('click', function () {
    copyPhoneNumber('emergency-copy-number');
});
document.getElementById('police-copy-btn').addEventListener('click', function () {
    copyPhoneNumber('police-number');
});
document.getElementById('fire-service-copy-btn').addEventListener('click', function () {
    copyPhoneNumber('fire-service-number');
});
document.getElementById('ambulance-copy-btn').addEventListener('click', function () {
    copyPhoneNumber('ambulance-number');
});
document.getElementById('woman-copy-button').addEventListener('click', function () {
    copyPhoneNumber('women-number');
});
document.getElementById('anti-corruption-copy-button').addEventListener('click', function () {
    copyPhoneNumber('anti-corruption-number');
});
document.getElementById('electricity-copy-button').addEventListener('click', function () {
    copyPhoneNumber('electricity-number');
});
document.getElementById('brac-copy-button').addEventListener('click', function () {
    copyPhoneNumber('brac-number');
});
document.getElementById('railway-copy-button').addEventListener('click', function () {
    copyPhoneNumber('railway-number');
});

