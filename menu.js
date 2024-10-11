let input = require("readline-sync");
console.log("🃏 Reshma's Dhaba 🃏\n <==========>");
console.log('\n1. Sunday\n2. Monday\n3. Tuesday\n4. Wednesday\n5. Thursday\n6. Friday\n7. Saturday');
let day = (input.question('Enter Day -'));
if (day == 1) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.question('enter your time-'));
    if (time == 1) {
        console.log('1. poha\n2.Aloo Paratha\n3.Idli Samber');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 15$\n2. Full plate - 30$");
            let price = (input.question('enter your choice:-'));

            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 15) {
                    console.log('Thank you😇');
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                        
                    }

                }
                

            } else if (price == 2) {
                
                console.log('2. Full plate -30$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 30) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log("your ouder is cancel😔 ",'keep your ' + totale + ' rupees')
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Aloo Paratha");
            console.log("1.half plate - 20$\n2. Full plate - 80$");
            let price = (input.question('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 20) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 40$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("3.Idli Samber- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1. Veg Thali (Rice, Dal, Sabzi,Roti)- 90$\n2.Paneer Butter Masala with Roti- 100$\n3. Rajma Chawal- 80$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("1.Veg Thali (Rice, Dal, Sabzi- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paneer Butter Masala With Roti- 100$");
            console.log("1.half plate - 50$\n2. Full plate - 100$");
            let price = (input.question('Enter your dish-'))
            if (price == 1) {
                console.log('1. half plate - 50$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==50) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 100$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 100) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("Rajma Chawal- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('Enter your choice-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra  " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Masala Dosa- 60$\n2. Dal Tadka With Jeera Rice- 80$\n3.Chole Bhature - 90$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1){
            console.log("1.Masala Dosa - 60$");
            console.log("1. half plate - 30$\n2. Full plate - 60$");
            let price = (input.question('enter your choice:-'));
            if (price == 1){
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 30) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇')
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -60$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 60) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra " + extra+ " rupees");
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } if (dish == 2) {
            console.log("2. Dal Tadka With Jeera Rice- 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 3) {
            console.log("3. Chole Bhature - 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + less2;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less +" rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let total = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }
}else if (day == 2) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.question('enter your time-'));
    if (time == 1) {
        console.log('1. poha\n2.Aloo Paratha\n3.Idli Samber');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 15$\n2. Full plate - 30$");
            let price = (input.question('enter your choice:-'));

            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 15) {
                    console.log('Thank you😇');
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                        
                    }

                }
                

            } else if (price == 2) {
                
                console.log('2. Full plate -30$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 30) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log("your ouder is cancel😔 ",'keep your ' + totale + ' rupees')
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Aloo Paratha");
            console.log("1.half plate - 20$\n2. Full plate - 80$");
            let price = (input.question('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 20) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 40$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("3.Idli Samber- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1. Veg Thali (Rice, Dal, Sabzi,Roti)- 90$\n2.Paneer Butter Masala with Roti- 100$\n3. Rajma Chawal- 80$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("1.Veg Thali (Rice, Dal, Sabzi- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paneer Butter Masala With Roti- 100$");
            console.log("1.half plate - 50$\n2. Full plate - 100$");
            let price = (input.question('Enter your dish-'))
            if (price == 1) {
                console.log('1. half plate - 50$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==50) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 100$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 100) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("Rajma Chawal- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('Enter your choice-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra  " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Masala Dosa- 60$\n2. Dal Tadka With Jeera Rice- 80$\n3.Chole Bhature - 90$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1){
            console.log("1.Masala Dosa - 60$");
            console.log("1. half plate - 30$\n2. Full plate - 60$");
            let price = (input.question('enter your choice:-'));
            if (price == 1){
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 30) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇')
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -60$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 60) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra " + extra+ " rupees");
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } if (dish == 2) {
            console.log("2. Dal Tadka With Jeera Rice- 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 3) {
            console.log("3. Chole Bhature - 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + less2;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less +" rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let total = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }
}else if (day == 3) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.question('enter your time-'));
    if (time == 1) {
        console.log('1. poha\n2.Aloo Paratha\n3.Idli Samber');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 15$\n2. Full plate - 30$");
            let price = (input.question('enter your choice:-'));

            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 15) {
                    console.log('Thank you😇');
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                        
                    }

                }
                

            } else if (price == 2) {
                
                console.log('2. Full plate -30$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 30) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log("your ouder is cancel😔 ",'keep your ' + totale + ' rupees')
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Aloo Paratha");
            console.log("1.half plate - 20$\n2. Full plate - 80$");
            let price = (input.question('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 20) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 40$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("3.Idli Samber- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1. Veg Thali (Rice, Dal, Sabzi,Roti)- 90$\n2.Paneer Butter Masala with Roti- 100$\n3. Rajma Chawal- 80$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("1.Veg Thali (Rice, Dal, Sabzi- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paneer Butter Masala With Roti- 100$");
            console.log("1.half plate - 50$\n2. Full plate - 100$");
            let price = (input.question('Enter your dish-'))
            if (price == 1) {
                console.log('1. half plate - 50$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==50) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 100$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 100) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("Rajma Chawal- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('Enter your choice-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra  " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Masala Dosa- 60$\n2. Dal Tadka With Jeera Rice- 80$\n3.Chole Bhature - 90$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1){
            console.log("1.Masala Dosa - 60$");
            console.log("1. half plate - 30$\n2. Full plate - 60$");
            let price = (input.question('enter your choice:-'));
            if (price == 1){
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 30) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇')
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -60$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 60) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra " + extra+ " rupees");
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } if (dish == 2) {
            console.log("2. Dal Tadka With Jeera Rice- 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 3) {
            console.log("3. Chole Bhature - 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + less2;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less +" rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let total = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }
}else if (day == 4) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.question('enter your time-'));
    if (time == 1) {
        console.log('1. poha\n2.Aloo Paratha\n3.Idli Samber');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 15$\n2. Full plate - 30$");
            let price = (input.question('enter your choice:-'));

            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 15) {
                    console.log('Thank you😇');
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                        
                    }

                }
                

            } else if (price == 2) {
                
                console.log('2. Full plate -30$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 30) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log("your ouder is cancel😔 ",'keep your ' + totale + ' rupees')
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Aloo Paratha");
            console.log("1.half plate - 20$\n2. Full plate - 80$");
            let price = (input.question('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 20) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 40$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("3.Idli Samber- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1. Veg Thali (Rice, Dal, Sabzi,Roti)- 90$\n2.Paneer Butter Masala with Roti- 100$\n3. Rajma Chawal- 80$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("1.Veg Thali (Rice, Dal, Sabzi- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paneer Butter Masala With Roti- 100$");
            console.log("1.half plate - 50$\n2. Full plate - 100$");
            let price = (input.question('Enter your dish-'))
            if (price == 1) {
                console.log('1. half plate - 50$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==50) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 100$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 100) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("Rajma Chawal- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('Enter your choice-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra  " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Masala Dosa- 60$\n2. Dal Tadka With Jeera Rice- 80$\n3.Chole Bhature - 90$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1){
            console.log("1.Masala Dosa - 60$");
            console.log("1. half plate - 30$\n2. Full plate - 60$");
            let price = (input.question('enter your choice:-'));
            if (price == 1){
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 30) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇')
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -60$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 60) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra " + extra+ " rupees");
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } if (dish == 2) {
            console.log("2. Dal Tadka With Jeera Rice- 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 3) {
            console.log("3. Chole Bhature - 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + less2;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less +" rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let total = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }
}else if (day == 5) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.question('enter your time-'));
    if (time == 1) {
        console.log('1. poha\n2.Aloo Paratha\n3.Idli Samber');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 15$\n2. Full plate - 30$");
            let price = (input.question('enter your choice:-'));

            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 15) {
                    console.log('Thank you😇');
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                        
                    }

                }
                

            } else if (price == 2) {
                
                console.log('2. Full plate -30$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 30) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log("your ouder is cancel😔 ",'keep your ' + totale + ' rupees')
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Aloo Paratha");
            console.log("1.half plate - 20$\n2. Full plate - 80$");
            let price = (input.question('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 20) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 40$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("3.Idli Samber- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1. Veg Thali (Rice, Dal, Sabzi,Roti)- 90$\n2.Paneer Butter Masala with Roti- 100$\n3. Rajma Chawal- 80$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("1.Veg Thali (Rice, Dal, Sabzi- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paneer Butter Masala With Roti- 100$");
            console.log("1.half plate - 50$\n2. Full plate - 100$");
            let price = (input.question('Enter your dish-'))
            if (price == 1) {
                console.log('1. half plate - 50$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==50) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 100$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 100) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("Rajma Chawal- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('Enter your choice-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra  " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Masala Dosa- 60$\n2. Dal Tadka With Jeera Rice- 80$\n3.Chole Bhature - 90$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1){
            console.log("1.Masala Dosa - 60$");
            console.log("1. half plate - 30$\n2. Full plate - 60$");
            let price = (input.question('enter your choice:-'));
            if (price == 1){
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 30) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇')
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -60$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 60) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra " + extra+ " rupees");
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } if (dish == 2) {
            console.log("2. Dal Tadka With Jeera Rice- 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 3) {
            console.log("3. Chole Bhature - 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + less2;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less +" rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let total = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }
}else if (day == 6) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.question('enter your time-'));
    if (time == 1) {
        console.log('1. poha\n2.Aloo Paratha\n3.Idli Samber');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 15$\n2. Full plate - 30$");
            let price = (input.question('enter your choice:-'));

            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 15) {
                    console.log('Thank you😇');
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                        
                    }

                }
                

            } else if (price == 2) {
                
                console.log('2. Full plate -30$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 30) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log("your ouder is cancel😔 ",'keep your ' + totale + ' rupees')
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Aloo Paratha");
            console.log("1.half plate - 20$\n2. Full plate - 80$");
            let price = (input.question('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 20) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 40$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("3.Idli Samber- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1. Veg Thali (Rice, Dal, Sabzi,Roti)- 90$\n2.Paneer Butter Masala with Roti- 100$\n3. Rajma Chawal- 80$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("1.Veg Thali (Rice, Dal, Sabzi- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paneer Butter Masala With Roti- 100$");
            console.log("1.half plate - 50$\n2. Full plate - 100$");
            let price = (input.question('Enter your dish-'))
            if (price == 1) {
                console.log('1. half plate - 50$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==50) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 100$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 100) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("Rajma Chawal- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('Enter your choice-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra  " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Masala Dosa- 60$\n2. Dal Tadka With Jeera Rice- 80$\n3.Chole Bhature - 90$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1){
            console.log("1.Masala Dosa - 60$");
            console.log("1. half plate - 30$\n2. Full plate - 60$");
            let price = (input.question('enter your choice:-'));
            if (price == 1){
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 30) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇')
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -60$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 60) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra " + extra+ " rupees");
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } if (dish == 2) {
            console.log("2. Dal Tadka With Jeera Rice- 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 3) {
            console.log("3. Chole Bhature - 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + less2;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less +" rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let total = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }
}else if (day == 7) {

    console.log('1.breackfast\n2. lunch\n3. dinner');
    let time = (input.question('enter your time-'));
    if (time == 1) {
        console.log('1. poha\n2.Aloo Paratha\n3.Idli Samber');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("poha");
            console.log("1. half plate - 15$\n2. Full plate - 30$");
            let price = (input.question('enter your choice:-'));

            if (price == 1) {
                console.log('1. half plate - 15$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 15) {
                    console.log('Thank you😇');
                } else if (pay > 15) {
                    let extra = pay - 15;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 15) {
                    let less = 15 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                        
                    }

                }
                

            } else if (price == 2) {
                
                console.log('2. Full plate -30$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 30) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log("your ouder is cancel😔 ",'keep your ' + totale + ' rupees')
                    }
                }
            }
        } else if (dish == 2) {
            console.log("2.Aloo Paratha");
            console.log("1.half plate - 20$\n2. Full plate - 80$");
            let price = (input.question('Enter your price'))
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay == 20) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 40$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("3.Idli Samber- 40$");
            console.log("1. half plate - 20$\n2. Full plate - 40$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 20$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 20) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 20) {
                    let extra = pay - 20;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 20) {
                    let less = 20 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = (pay + secondpay);
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -40$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 40) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 2) {
        console.log('1. Veg Thali (Rice, Dal, Sabzi,Roti)- 90$\n2.Paneer Butter Masala with Roti- 100$\n3. Rajma Chawal- 80$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1) {
            console.log("1.Veg Thali (Rice, Dal, Sabzi- 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 2) {
            console.log("Paneer Butter Masala With Roti- 100$");
            console.log("1.half plate - 50$\n2. Full plate - 100$");
            let price = (input.question('Enter your dish-'))
            if (price == 1) {
                console.log('1. half plate - 50$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==50) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 50) {
                    let extra = pay - 50;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 50) {
                    let less = 50 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 100$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 100) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 100) {
                    let extra = pay - 100;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 100) {
                    let less = 100 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }else if (dish == 3) {
            console.log("Rajma Chawal- 80$");
            console.log("1.half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('Enter your choice-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay -'));
                if (pay ==40) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("keep your extra  " + extra + " rupees");
                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more money " + less);
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra  " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
                
            }else if (price == 2) {
                console.log('2.Full plate - 80$ ');
                let pay = (input.questionInt('Enter your pay'));
                if (pay == 80) {
                    console.log("Thank You😇");
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + "rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }else if (time == 3) {
        console.log('\n1.Masala Dosa- 60$\n2. Dal Tadka With Jeera Rice- 80$\n3.Chole Bhature - 90$');
        let dish = (input.question("enter your dish -"));
        if (dish == 1){
            console.log("1.Masala Dosa - 60$");
            console.log("1. half plate - 30$\n2. Full plate - 60$");
            let price = (input.question('enter your choice:-'));
            if (price == 1){
                console.log('1. half plate - 30$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 30) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 30) {
                    let extra = pay - 30;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 30) {
                    let less = 30 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇')
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -60$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 60) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 60) {
                    let extra = pay - 60;
                    console.log("keep your extra " + extra+ " rupees");
                } else if (pay < 60) {
                    let less = 60 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } if (dish == 2) {
            console.log("2. Dal Tadka With Jeera Rice- 80$");
            console.log("1. half plate - 40$\n2. Full plate - 80$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 40$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 40) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 40) {
                    let extra = pay - 40;
                    console.log("Keep your extra " + extra + " rupees");

                } else if (pay < 40) {
                    let less = 40 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -80$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 80) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 80) {
                    let extra = pay - 80;
                    console.log("keep your extra " + extra + " rupees");
                } else if (pay < 80) {
                    let less = 80 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        } else if (dish == 3) {
            console.log("3. Chole Bhature - 90$");
            console.log("1. half plate - 45$\n2. Full plate - 90$");
            let price = (input.question('enter your choice:-'));
            if (price == 1) {
                console.log('1. half plate - 45$');
                let pay = (input.questionInt('Enter your pay-'));
                if (pay == 45) {
                    console.log('Thank you😇');
                    console.log('order more dishes 😇');
                } else if (pay > 45) {
                    let extra = pay - 45;
                    console.log("Keep your extra " + extra + " rupees");
                } else if (pay < 45) {
                    let less = 45 - pay;
                    console.log("give me more " + less + " rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes 😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let totale = pay + less2;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }

            } else if (price == 2) {
                console.log('2. Full plate -90$');
                let pay = (input.questionInt('enter your pay-'));
                if (pay == 90) {
                    console.log('Thank You😇');
                    console.log('order more dishes 😇');
                } else if (pay > 90) {
                    let extra = pay - 90;
                    console.log("keep your extra money" + extra);
                } else if (pay < 90) {
                    let less = 90 - pay;
                    console.log("give me more " + less +" rupees");
                    let secondpay = (input.questionInt('Enter your secondpay-'));
                    if (secondpay == less){
                        console.log('thank you😇');
                        console.log('order more dishes😇');
                    }else if (secondpay > less){
                        let extra = secondpay-less;
                        console.log("keep your extra " + extra + " rupees");
                    }else if (secondpay<less){
                        let less2 = less-secondpay;
                        let total = pay + secondpay;
                        console.log( "your ouder is cancel", "😔",'keep your ' + totale + ' rupees')

                    }
                }
            }
        }
    }
}
