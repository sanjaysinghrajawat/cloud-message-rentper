"use client"
import React, { useEffect } from 'react'
import { messaging } from './firebaseConfig';
import { getToken, onMessage } from 'firebase/messaging';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Message from './Message';

const CloudMessage = () => {
    async function requestNotificationPermission(){
        const permission = await Notification.requestPermission();
        if(permission === 'granted'){ // Genetare Token
            const token = await getToken(messaging, {
                vapidKey : "BMQJD2bmLmoEnJtJWbqa2hiRSy11wyisZ4vITmYcwBqyGXjMKxGHbcCBHNBF4YaVVvm9F26WtjotCnyxUk33Y7A"
            })
            console.log("Token Gen ", token);
        }
        else if(permission === 'denied'){
            alert("Notitification is Block: You will not recieve any update");
        }
    }

    useEffect(()=>{
        requestNotificationPermission();
    },[])

    onMessage(messaging, (payload) => {
        toast(<Message notification={payload.notification} />)
    })
  return (
    <div>CloudMessage
        <ToastContainer />
    </div>
  )
}

export default CloudMessage