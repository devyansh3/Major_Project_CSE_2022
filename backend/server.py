from flask import Flask, request
import datetime
import spacy
from spacy import displacy
import pdfplumber

x = datetime.datetime.now()

app = Flask(__name__)


@app.route('/data', methods=['POST'])
def get_time():
    ans = redaction(request.json['path'], par)
    return {
        'redacted': ans,
    }
  

nlp = spacy.load('en_core_web_sm')


# TAKE DOC INPUT HERE
def pdftoTxt(path):
    pages = []
    with pdfplumber.open(path) as pdf:
        for i in range(len(pdf.pages)):
            current_page = pdf.pages[i]
            pages.append(current_page.extract_text())
    return pages


def txtinp():
    txt = input()
    return txt


# REDACTION HAPPENS HERE. THE MODEL IS INEFFICIENT AT THE MOMENT.
def Sanitize(text,categories):
    document = nlp(text)
    redacted = []
    with document.retokenize() as retokenizer:
        for ent in document.ents:
            retokenizer.merge(ent)
    for token in document:
        if token.ent_type_ in categories:
            redacted.append("[REDACTED]")
        else:
            redacted.append(token.text)
    final = (" ".join(redacted))
    return final


# def selectParam():
#     print("Choose redaction parameters : ")
#     print(" 1. PERSON\n 2. ORGANISATION\n 3. TIME\n 4. GPE\n 5.CARDINAL ")
#     ans = list((input().strip().split(' ')))
#     return ans
par = ['PERSON','ORG']

def redaction(path,categories):
    var = 1
    txttype = "pdf"
    final_text = ''
    hell = []


    if var ==0: #CASE FOR MANUAL REDACTION
        pass
    if var ==1: #CASE FOR ENTITY REDACTION
        if txttype == "pdf":
            page = pdftoTxt(path)
            for i in range(len(page)):
                hell.append(Sanitize(page[i],categories))
            final_text = ' '.join(hell)
        if txttype == "txt":
            text = txtinp()
            final_text =  Sanitize(text,categories)
    return final_text


if __name__ == '__main__':
    app.run(debug=True)
