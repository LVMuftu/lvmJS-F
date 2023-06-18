const did = (id) => {
    return document.getElementById(id);
}



const qsl = (selector) => {
    return document.querySelector(selector);
}
const formclick = () => {
    document.body.dispatchEvent(new Event('change'));
    document.body.dispatchEvent(new Event('scroll'));
    document.body.dispatchEvent(new Event('mouseover'));
    document.body.dispatchEvent(new Event('keydown'));
    document.body.dispatchEvent(new Event('change'));
    document.body.dispatchEvent(new Event('click'));
    const inputs = document.querySelectorAll('input[type="radio"][value="1"]');
    const txt = document.querySelectorAll('input[type="text"]');
    const num = document.querySelectorAll('input[type="number"]');
    const cbx = document.querySelectorAll('input[type="checkbox"]');
    const tarea = document.querySelectorAll('textarea');
    const selectElementx = document.querySelectorAll('select');
    const btns = document.querySelectorAll("button");
    const btx = document.querySelectorAll('input[type="button"]');
    const sub = document.querySelectorAll('input[type="submit"]');

    selectElementx.forEach(selectElement => {
        const firstOption = selectElement.querySelector('option:last-child');
        if (firstOption) {
            firstOption.selected = true;
            firstOption.dispatchEvent(new Event('change'));
            firstOption.dispatchEvent(new Event('scroll'));
            firstOption.dispatchEvent(new Event('mouseover'));
            firstOption.dispatchEvent(new Event('keydown'));
            firstOption.dispatchEvent(new Event('change'));
            firstOption.dispatchEvent(new Event('click'));
        }
    });
    txt.forEach(t => {
        t.value = "lorem";
        t.dispatchEvent(new Event('change'));
        t.dispatchEvent(new Event('scroll'));
        t.dispatchEvent(new Event('mouseover'));
        t.dispatchEvent(new Event('keydown'));
        t.dispatchEvent(new Event('change'));
        t.dispatchEvent(new Event('click'));
    });
    num.forEach(n => {
        n.value = Math.floor(Math.random() * 100);
        n.dispatchEvent(new Event('change'));
        n.dispatchEvent(new Event('scroll'));
        n.dispatchEvent(new Event('mouseover'));
        n.dispatchEvent(new Event('keydown'));
        n.dispatchEvent(new Event('change'));
        n.dispatchEvent(new Event('click'));
    });
    cbx.forEach(c => {
        if (!c.checked) {
            c.checked = true;
            c.dispatchEvent(new Event('change'));
            c.dispatchEvent(new Event('scroll'));
            c.dispatchEvent(new Event('mouseover'));
            c.dispatchEvent(new Event('keydown'));
            c.dispatchEvent(new Event('change'));
            c.dispatchEvent(new Event('click'));

        }
    });
    tarea.forEach(r => {
        r.value = "loremlorem";
        r.dispatchEvent(new Event('change'));
        r.dispatchEvent(new Event('scroll'));
        r.dispatchEvent(new Event('mouseover'));
        r.dispatchEvent(new Event('keydown'));
        r.dispatchEvent(new Event('change'));
        r.dispatchEvent(new Event('click'));
    });
    inputs.forEach((input) => {
        input.click();
        input.dispatchEvent(new Event('change'));
        input.dispatchEvent(new Event('scroll'));
        input.dispatchEvent(new Event('mouseover'));
        input.dispatchEvent(new Event('keydown'));
        input.dispatchEvent(new Event('change'));
        input.dispatchEvent(new Event('click'));
    });
    btns.forEach(b => {
        if (b.textContent === 'Kaydet' || b.textContent === 'kaydet' || b.textContent === 'Onayla' || b.textContent === 'onayla' || b.textContent === 'KAYDET' || b.textContent === 'ONAYLA' || b.textContent === 'Giriş' || b.textContent === 'giriş' || b.textContent === 'GİRİŞ' || b.textContent === 'devam' || b.textContent === 'Devam' || b.textContent === 'DEVAM') {
            b.click();
            b.dispatchEvent(new Event('change'));
            b.dispatchEvent(new Event('scroll'));
            b.dispatchEvent(new Event('mouseover'));
            b.dispatchEvent(new Event('keydown'));
            b.dispatchEvent(new Event('change'));
            b.dispatchEvent(new Event('click'));
            return;
        };
    });

    btx.forEach(b => {
        if (b.textContent === 'Kaydet' || b.textContent === 'kaydet' || b.textContent === 'Onayla' || b.textContent === 'onayla' || b.textContent === 'KAYDET' || b.textContent === 'ONAYLA' || b.textContent === 'Giriş' || b.textContent === 'giriş' || b.textContent === 'GİRİŞ' || b.textContent === 'devam' || b.textContent === 'Devam' || b.textContent === 'DEVAM') {
            b.click();
            b.dispatchEvent(new Event('change'));
            b.dispatchEvent(new Event('scroll'));
            b.dispatchEvent(new Event('mouseover'));
            b.dispatchEvent(new Event('keydown'));
            b.dispatchEvent(new Event('change'));
            b.dispatchEvent(new Event('click'));
            return;
        };
    })
    sub.forEach(b => {
        if (b.textContent === 'Kaydet' || b.textContent === 'kaydet' || b.textContent === 'Onayla' || b.textContent === 'onayla' || b.textContent === 'KAYDET' || b.textContent === 'ONAYLA' || b.textContent === 'Giriş' || b.textContent === 'giriş' || b.textContent === 'GİRİŞ' || b.textContent === 'devam' || b.textContent === 'Devam' || b.textContent === 'DEVAM') {
            b.click();
            b.dispatchEvent(new Event('change'));
            b.dispatchEvent(new Event('scroll'));
            b.dispatchEvent(new Event('mouseover'));
            b.dispatchEvent(new Event('keydown'));
            b.dispatchEvent(new Event('change'));
            b.dispatchEvent(new Event('click'));
            return;
        };
    });




};


const ael = (item, func, type = "click") => {
    const tag = qsa(item);
    tag.forEach(t => {
        t.addEventListener(`${type}`, func);
    })
}

const cpx = (...item) => {
    if (item[0] == "cls") {
        cls();
        item.forEach((q,i) => {
            if(i != 0) {
                console.log(q)
            }
        })
    }
    else {
        item.forEach(q => {
            console.log(q)
        })
    }
}

const tipo = {
    unix: () => {
        return new Date().getTime();
    },
    y: () => {
        return new Date().getFullYear();
    },
    mo: () => {
        return new Date().getMonth();
    },
    w: () => {
        return new Date().getDay();
    },
    d: () => {
        return new Date().getDate();
    },
    h: () => {
        return new Date().getHours();
    },
    mi: () => {
        return new Date().getMinutes();
    },
    s: () => {
        return new Date().getSeconds();
    },
    ms: () => {
        return new Date().getMilliseconds();
    },
    ll: (returnArray = false) => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const dayOfWeek = date.getDay();
        const dayOfMonth = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const millisecond = date.getMilliseconds();

        if (returnArray) {
            return [year, month, dayOfWeek, dayOfMonth, hour, minute, second, millisecond];
        } else {
            return {
                year,
                month,
                dayOfWeek,
                dayOfMonth,
                hour,
                minute,
                second,
                millisecond
            };
        }
    }


}

const cls = () => {
    console.clear();
}
const spl = (str, bl = "") => {
    return str.split(bl);
}
const dc = ( r = false, g = false, b = false) => {
    
    let tt = "0123456789abcdeffedcba9876543210";
    tt = spl(tt);
    let clpl = "01234";
    clpl = spl(clpl);
    let clpm = "56789a"
    clpm = spl(clpm);
    let clpd = "bcdef"
    clpd = spl(clpd);
    let red = "", gre = "", blu = "";
    if (r = false) {
        red += tt[rnd(tt.length)] + tt[rnd(tt.length)];
    }
    else if (r == 0) {
        red += clpl[rnd(clpl.length)] + clpl[rnd(clpl.length)];
    }
    else if (r == 1) {
        red += clpm[rnd(clpm.length)] + clpm[rnd(clpm.length)];
    }
    else if (r == 2) {
        red += clpd[rnd(clpd.length)] + clpd[rnd(clpd.length)];
    }
    if (g = false) {
        gre += tt[rnd(tt.length)] + tt[rnd(tt.length)];
    }
    else if (g == 0) {
        gre += clpl[rnd(clpl.length)] + clpl[rnd(clpl.length)];
    }
    else if (g == 1) {
        gre += clpm[rnd(clpm.length)] + clpm[rnd(clpm.length)];
    }
    else if (g == 2) {
        gre += clpd[rnd(clpd.length)] + clpd[rnd(clpd.length)];
    }
    if (b = false) {
        blu += tt[rnd(tt.length)] + tt[rnd(tt.length)];
    }
    else if (b == 0) {
        blu += clpl[rnd(clpl.length)] + clpl[rnd(clpl.length)];
    }
    else if (b == 1) {
        blu += clpm[rnd(clpm.length)] + clpm[rnd(clpm.length)];
    }
    else if (b == 2) {
        blu += clpd[rnd(clpd.length)] + clpd[rnd(clpd.length)];
    }
    let rgb = "#" + red + gre + blu;

    return rgb;

}


const sty = {
    shadow: (item, ...ayr) => {
        const tag = qsa(item);
        if (ayr.length === 0) {
            tag.forEach(t => {
                t.style.boxShadow = "0px 0px 10px #000";
            })
        }
        else if (ayr.length === 1) {
            tag.forEach(t => {
                t.style.boxShadow = "0px 0px 10px " + String(ayr[0]);
            })

        }
        else if (ayr.length === 2) {
            tag.forEach(t => {
                f.style.boxShadow = `0px 0px ${ayr[1]}px ${ayr[0]}`;
            })
        }
        else if (ayr.length === 3) {
            tag.forEach(t => {
                f.style.boxShadow = `${ayr[2]}px ${ayr[2]}px ${ayr[1]}px ${ayr[0]}`;
            })
        }
        else if (ayr.length === 4) {
            tag.forEach(t => {
                f.style.boxShadow = `${ayr[3]}px ${ayr[2]}px ${ayr[1]}px ${ayr[0]}`;
            })
        }


    },
    vis: (tag, boll = null) => {
        const ta = qsa(tag);
        if (boll != null && (boll == true || boll == false)) {
            if (boll) {
                ta.forEach(t => {
                    t.style.visibility = "visible";
                })
            }
            else {
                tag.forEach(t => {
                    t.style.visibility = "hidden";
                })
            }
        }
        else if (boll == null) {
            ta.forEach(t => {
                const visibility = window.getComputedStyle(t).getPropertyValue('visibility');
                if (visibility == "visible") {
                    t.style.visibility = "hidden";
                }
                else if (visibility == "hidden") {
                    t.style.visibility = "visible";
                }
            })
        }

    },
    h: (tag, px) => {
        const ta = qsa(tag);
        let apx = px.split("");
        if (apx[0] == "*") {
            ta.forEach(t => {
                let r = t.offsetHeight;
                let mic = px.slice(1);
                mic = Number(mic);
                t.style.height = `${r * mic}px`
            })

        }
        else if (apx[0] == "/") {
            ta.forEach(t => {
                let r = t.offsetHeight;
                let mic = px.slice(1);
                mic = Number(mic);
                t.style.height = `${r / mic}px`
            })
        }
        else if (apx[0] == "+") {
            ta.forEach(t => {
                let r = t.offsetHeight;
                let mic = px.slice(1);
                mic = Number(mic);
                t.style.height = `${r + mic}px`
            })
        }
        else if (apx[0] == "-") {
            ta.forEach(t => {
                let r = t.offsetHeight;
                let mic = px.slice(1);
                mic = Number(mic);
                t.style.height = `${r - mic}px`
            })
        }
        else {
            ta.forEach(t => {
                t.style.height = px;
            })
        }
    },
    w: (tag, px) => {
        const ta = qsa(tag);
        let apx = px.split("");
        if (apx[0] == "*") {
            ta.forEach(t => {
                let r = t.offsetWidth;
                let mic = px.slice(1);
                mic = Number(mic);
                t.style.width = `${r * mic}px`
            })

        }
        else if (apx[0] == "/") {
            ta.forEach(t => {
                let r = t.offsetWidth;
                let mic = px.slice(1);
                mic = Number(mic);
                t.style.width = `${r / mic}px`
            })
        }
        else if (apx[0] == "+") {
            ta.forEach(t => {
                let r = t.offsetWidth;
                let mic = px.slice(1);
                mic = Number(mic);
                t.style.width = `${r + mic}px`
            })
        }
        else if (apx[0] == "-") {
            ta.forEach(t => {
                let r = t.offsetWidth;
                let mic = px.slice(1);
                mic = Number(mic);
                t.style.width = `${r - mic}px`
            })
        }
        else {
            ta.forEach(t => {
                t.style.width = px;
            })
        }
    },
    br: (item, px, line = null) => {
        const tag = qsa(item);
        if (line == null) {
            t.style.borderRadius = px;
        }
        else {
            let arr = line.split("");
            let o = line.slice(2);
            if (arr[0] == "lb") {
                tag.forEach(t => {
                    t.style.borderBottomLeftRadius = px;
                })
            }
            else if (arr[0] == "lt") {
                tag.forEach(t => {
                    t.style.borderTopLeftRadius = px;
                })
            }
            else if (arr[0] == "rb") {
                tag.forEach(t => {
                    t.style.borderBottomRightRadius = px;
                })
            }
            if (arr[0] == "rt") {
                tag.forEach(t => {
                    t.style.borderTopRightRadius = px;
                })
            }

        }
    },
    as: (item) => {
        const tag = qsa(item);
        let nt = [];
        tag.forEach(t => {
            nt.push(t.style);
        })
        return nt;
    },
    bg: (item, boll = false) => {
        const tag = qsa(item);
        if (boll == false) {
            tag.forEach(q => {

                q.style.backgroundColor = dc(q);
            })
        }
        else {
            q.style.backgroundColor = boll;
        }
    },
    c: (item, boll = false) => {
        const tag = qsa(item);
        if (boll == false) {
            tag.forEach(q => {
                q.style.color = dc(q);
            })
        }
        else {
            q.style.color = boll;
        }
    },


}
const odd = (num, ...nums) => {
    let rtq = true;
    for (let i = 0; i < nums.length; i++) {
        if (rtq) {
            if (num % nums[i] == 0) {
                rtq = false;
                return true;
            }
        }
    }

    return false;
}



const rnd = (max, min = 0) => {
    const alt = Math.floor(Math.random() * min);
    const otr = Math.floor(Math.random() * (max - min));
    return otr + alt;
}
const plush = (arr, s = "",t="",e="") => {
    let res = "";
    res += t;
    arr.forEach(a => {
        plush += a + s;
    })
    res+=e;
    return res;
}

const tresDtxt = (item,color,shadow,txt,size,cursor=false) => {
    const tag = sty.as(item);
    const tg = qsa(item);
    tag.forEach((t,j) => {
        t.userSelect = "none";
        t.position = "realative";
        
        t.color = color;
        t.textAlign = "center";
        let sdh = "";
        for(let i = 1 ; i <= 9 ; i++){
            sdh += `-${i}px ${i}px ${shadow},`
        }
        sdh += "-20px 20px 5px rgba(0,0,0,.8)";
        t.textShadow = sdh;
        tg[j].innerText = txt;
        t.fontSize = size;
        if(cursor){
            t.outline = "none";
            tg[j].setAttribute("contenteditable","true");
            tg[j].setAttribute("spellcheck","false");
        }
    })
}
//let t = document.getElementById("fg");


const qsa = (selector,func = false) => {
 if(typeof selector == "string"){
    return document.querySelectorAll(selector);
 }
}






