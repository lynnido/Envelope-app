from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/get_letter')
def get_letter():
    message = (
        "Hallooo my dearest Joshie Poo,<br><br>"
        "I know the past couple of months has been a lot for you lately especially with your car, finances, studying for the MCAT and all things in between. "
        "While your circumstances has been stressful for you, through everything I find it very admirable that you are able to overcome any situation, making the best out of any situation. "
        "It also amazes me to how you have so much resilience in life. While there are many obstacles that come along your way, I want you to know that I’ll be here to accompany you to the best of my abilities every step of the way. "
        "I hope I have been able to be a shoulder for you to lean on whenever you just need to rant, someone to hug, or someone to sit in silence with. "
        "Whatever the situation may be, I will gladly listen to what you have to say and as always I believe we will be able to get through it together. "
        "And as always, thank you for standing by my side and being my biggest supporter through it all. I always appreciate your efforts and the amount of care you have for me despite us not even knowing each other for a year even. "
        "While this might cheesy af, but despite not knowing each other for long it feels like I have known you for a lifetime. " 
        "Every moment we share feels dear to me, and every conversation we have I feel more connected to you. You are able to understand me in a way no one else can, and I am forever grateful for that. "
        "Now that your MCAT is over, I hope you take some time to decompress a little and engage in tasks meaningful to you and which bring you joy. "
        "Taking time to bask in the simple joys in life. Whether we enjoy the small everyday tasks together or our beach trip I’ll be looking forward to spending it with you :) "
        "WE’RE IN THIS TOGETHER!! I LOVE YOU ❤️❤️❤️ <br><br>"
        "₍^. .^₎⟆"
    )
    return jsonify(content=message)

if __name__ == '__main__':
    app.run(debug=True)
