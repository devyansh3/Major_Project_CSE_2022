import datetime

import pdfplumber
import spacy
from flask import Flask, request

x = datetime.datetime.now()

app = Flask(__name__)


@app.route('/data', methods=['POST'])
def get_time():
    ans = redaction(request.json['path'],par)
    return {
        'redacted': ans,
    }


nlp = spacy.load('en_core_web_sm')


# TAKE DOC INPUT HERE
def pdf_to_text(path):
    pages = []
    with pdfplumber.open(path) as pdf:
        for i in range(len(pdf.pages)):
            current_page = pdf.pages[i]
            pages.append(current_page.extract_text())
    return pages


def txt_input():
    txt = input()
    return txt


# REDACTION HAPPENS HERE. THE MODEL IS INEFFICIENT AT THE MOMENT.
def sanitize(text, categories):
    if "SEARCH" in type:
        search = print("Enter keyword : ",input())
        final = text.replace(search,"[REDACTED]")
        return final
    else:
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


par = ['PERSON', 'ORG']


def redaction(path, categories):
    var = 1
    txt_type = "pdf"
    final_text = ''
    hell = []

    if var == 0:  # CASE FOR MANUAL REDACTION
        pass
    if var == 1:  # CASE FOR ENTITY REDACTION
        if txt_type == "pdf":
            page = pdf_to_text(path)
            for i in range(len(page)):
                hell.append(sanitize(page[i], categories))
            final_text = ' '.join(hell)
        if txt_type == "txt":
            text = txt_input()
            final_text = sanitize(text, categories)
    return final_text


def displayCount(sent):
    sentence = nlp(sent)
    label = {}
    cnt = {"PERSON":0,"ORGANISATION":0,"NUMBERS":0,"LOCATIONS":0}
    for ent in sentence.ents:
        label[ent.text] = ent.label_
    for i in range(len(label)):
        if list(label.values())[i] == "PERSON":
            cnt["PERSON"]+=1
        elif list(label.values())[i] == "ORG":
            cnt["ORGANISATION"]+=1
        elif list(label.values())[i] == "CARDINAL":
            cnt["NUMBERS"]+=1
        elif list(label.values())[i] == "GPE":
            cnt["LOCATIONS"]+=1
    print(cnt)

if __name__ == '__main__':
    app.run(debug=True)
