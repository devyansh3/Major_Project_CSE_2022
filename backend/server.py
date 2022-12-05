from flask import Flask, request
import datetime
import spacy
from spacy import displacy
import pdfplumber

x = datetime.datetime.now()

app = Flask(__name__)


@app.route('/data', methods=['POST'])
def get_time():
    print(redaction(request.json['path']))
    return {
        'Name': "geek",
        "Age": "22",
        "Date": x,
        "programming": "python"
    }
  

nlp = spacy.load('en_core_web_sm')


# TAKE DOC INPUT HERE
def pdftoTxt(path):
    pages = []
    with pdfplumber.open(path) as pdf:
        for i in range(len(pdf.pages)):
            current_page = pdf.pages[i]
            pages[i] = nlp(current_page.extract_text())
    return pages


def txtinp():
    txt = input()
    txt = nlp(txt)
    return txt


# REDACTION HAPPENS HERE. THE MODEL IS INEFFICIENT AT THE MOMENT.
def Sanitize(text,type):
    document = nlp(text)
    redacted = []
    with document.retokenize() as retokenizer:
        for ent in document.ents:
            retokenizer.merge(ent)
    for token in document:
        if token.ent_type_ in type:
            redacted.append("[REDACTED]")
        else:
            redacted.append(token.text)
    print(" ".join(redacted))


def selectParam():
    print("Choose redaction parameters : ")
    print(" 1. PERSON\n 2. ORGANISATION\n 3. TIME\n 4. GPE\n 5.CARDINAL ")
    ans = list((input().strip().split(' ')))
    return ans


def redaction(path):
    var = -1
    txttype = ""


    if var ==0: #CASE FOR MANUAL REDACTION
        pass
    if var ==1: #CASE FOR ENTITY REDACTION
        par = selectParam()
        if txttype == "pdf":
            page = pdftoTxt(path)
            for i in range(len(page)):
                page[i] = Sanitize(page[i],par)
            final_text = ' '.join(page)
        if txttype == "txt":
            text = txtinp()
            final_text =  Sanitize(text,par)

    return final_text


if __name__ == '__main__':
    app.run(debug=True)
