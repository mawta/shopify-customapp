import axios from "axios";
import * as historyBrowser from "history";
import { notification, Button, Modal, Rate, Input } from "antd";
import { StarOutlined } from "@ant-design/icons";
import Cookies from "js-cookie";
import React from "react";
import Pusher from "pusher-js";

const { TextArea } = Input;

function getUrlParam(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}

function getRandom(arr, n) {
    try {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len) return [];
        // throw new RangeError(
        //     "getRandom: more elements taken than available"
        // );
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    } catch (e) {
        return [];
    }
}

const moveArray = (array, from, to) => {
    if (!array || !array[to] || !array[from] || to === from) return [];

    var target = array[from];
    var increment = to < from ? -1 : 1;

    for (var k = from; k != to; k += increment) {
        array[k] = array[k + increment];
    }
    array[to] = target;

    return array;
};

const setSetting = (key, value) => {
    let response = api("POST", "api/set-setting", {
        key: key,
        value: value,
    });

    return response.data;
};

let openNotification = (type, message, description, duration = 5) => {
    notification.destroy();
    notification[type]({
        message: message,
        description: description,
        duration: duration,
    });
};

const setCookie = (cookie, expires = 90) => {
    try {
        if (!Array.isArray(cookie)) {
            return Cookies.set(cookie.name, cookie.value, { expires: expires });
        }

        cookie.map((i) => {
            Cookies.set(i.name, i.value, { expires: expires });
        });
    } catch (err) {
        console.log(err);
    }
};

const getCookie = (name) => {
    return Cookies.get(name);
};

const openInNewTab = (url) => {
    let popUp = window.open(url, "_blank");
    if (popUp == null || typeof popUp == "undefined") {
        alert("Please disable your pop-up blocker and try again.");
    }
};

const filterObjByKey = (raw, keys = []) => {
    let result = [];
    raw.map((i) => {
        let obj = {};

        keys.map((k) => {
            obj[k] = i[k];
        });
        result.push(obj);
    });

    return result;
};

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
        .getElementsByTagName("meta")
        ["csrf-token"].getAttribute("content"),
};

const client = axios.create({
    baseURL: app.baseUrl,
});

const api = (method, url, data = {}, params = {}, header) => {
    if (!header) {
        // data = JSON.stringify(data);
        header = headers;
    }
    return client
        .request({
            data: data,
            params,
            headers: header,
            method,
            url,
        })
        .then((response) => response);
};

const history = historyBrowser.createBrowserHistory();

export {
    api,
    history,
    headers,
    setCookie,
    getCookie,
    openNotification,
    moveArray,
    openInNewTab,
    setSetting,
    getUrlParam,
    getRandom,
    filterObjByKey,
};
