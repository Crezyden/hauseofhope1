from flask import Flask, render_template, url_for, request, jsonify
from flask_mail import Mail, Message
# app = create_app()
app =Flask(__name__)

# app.config['MAILL_SERVER']='smtp.googlemail.com'
# app.config['MAIL_PORT']= 465
# app.config['MAIL_USE_SLL']= True
# app.config['MAIL_debug']= False
# app.config['MAIL_USERNAME']='deniss.kargins@gmail.com'
# app.config['MAIL_PASSWORD']=''
# app.config['MAIL_DEFAULT_SENDER']='deniss.kargins@gmail.com'
# app.config['MAIL_MAX_EMAILS']= None
# app.config['MAIL_ASCII_ATTA']= None

# app.config.from_pyfile['config.cfg']
# mail=Mail(app)  4

@app.route("/",  methods=['GET','POST'])
@app.route("/home")
def index():
    return render_template("home.html")

@app.route("/Whoweare")
def about():
    return render_template("whoweare.html")

@app.route("/Hope21")
def hope():
    return render_template("hope21.html")

@app.route("/Gallery")
def gallery():
    return render_template("gallery.html")

@app.route("/Activity")
def activity():
    return render_template("activity.html")

@app.route("/Contacts")
def contacs():
    return render_template("contacts.html")

# @app.route("/forms", methods=['POST'])
# def forms():

        # """User sent an email request"""
        # msg = Message("Feedback", recipients='deniss.kargins@gmail.com')
        # msg.body = "You have received new feedback from {0} {1} <{2}>.\n\n {3}".format(
        #     request.form['yourname'],
        #     request.form['email'],
        #     request.form['subject'],
        #     request.form['mess'])
        # try:
        #     mail.send(msg)
        #     msg = "We will respond as soon as possible."
        #     category = "success"
        # except Exception as err:
        #     msg = str(err)
        #     category = "danger"
        #
        # resp = {'feedback': msg, 'category': category}
        # return make_response(jsonify(resp), 200)
        #
        # return render_template('contacts.html')

    # name=request.form('youname')
    # email=request.form('email')
    # subject=request.form('subject')
    # mess=request.form('mess')
    # msg = Message("Hello", sender="hauseofhope@gmail.com", recipients=["deniss.kargins@gmail.com"])
    # mail.send(msg)
    # message="Вам отправлен запрос."
    # server=smtplib.SMTP('smtp.gmmail.com', 587)
    # server.starttls()
if __name__ == '__main__':
    app.run(debug = True, host = '0.0.0.0')
    # app.run(debug=True  )
