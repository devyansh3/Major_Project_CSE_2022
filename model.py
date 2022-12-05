import spacy
from spacy import displacy
import pdfplumber

nlp = spacy.load('en_core_web_sm')


# TAKE DOC INPUT HERE
def pdftoTxt():
    hell = []
    with pdfplumber.open(r'/Users/sompande/Documents/KPMG_SomPande/Bonafide.pdf') as pdf:
        for i in range(len(pdf.pages)):
            current_page = pdf.pages[i]
            # print(current_page.extract_text())
            # text = nlp(current_page.extract_text())
            hell.append(current_page.extract_text())
    fin = ' '.join(hell)
    return fin


   



def txtinp():
    txt = input()
    txt = nlp(txt)
    return txt

# pdfobj = open('/Users/sompande/Documents/KPMG_SomPande/Bonafide.pdf','rb')

# pdfread = pdfplumber.open('/Users/sompande/Documents/KPMG_SomPande/Bonafide.pdf','rb')
# page = pdfread.pages(0)
# ex1 = pdfread.extract_text()
# ex1 = "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1] A series of many genres, including fantasy, drama, coming-of-age fiction, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3] Other major themes in the series include prejudice, corruption, and madness.[4]"

# docx1 = nlp(ex1)

# print(docx1)





# REDACTION HAPPENS HERE. THE MODEL IS INEFFICIENT AT THE MOMENT.
def Sanitize(text,type):
    if "SEARCH" in type:
        search = input()
        text = text.replace(search,"[REDACTED]")
        print(text)
    else:
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
    
    



# def selectParam():
#     print("Choose redaction parameters : ")
#     print(" 1. PERSON\n 2. ORGANISATION\n 3. TIME\n 4. GPE\n 5.CARDINAL ")
#     ans = list((input().strip().split(' ')))
#     return ans


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
            

        

    
    




# #CHOOSE REDACTION TYPE HERE

# print("Select Redaction type : ")

# print("Cursor Redaction (press 0) ")
# print("Entity Redaction (press 1) ")

# inp = int(input())

# if inp == 0:
#     # Cursor redaction function call
#     pass
# elif  inp == 1:
#     pass

# else : 
#     print("Invalid Entry")







# # SELECTION PARAMETERS HERE
# print("Choose redaction parameters : ")
# print(" 1. PERSON\n 2. ORGANISATION\n 3. TIME\n 4. GPE\n 5.CARDINAL ")
# ans = list((input().strip().split(' ')))

# print(ans)









# # TESTING
# # for ent in docx1.ents:
# #     print(ent.text,ent.label_)




# var = -1
# txttype = ""


# if var ==0: #CASE FOR MANUAL REDACTION
#     pass
# if var ==1: #CASE FOR ENTITY REDACTION
#     par = selectParam()
#     if txttype == "pdf":
#         page = pdftoTxt("filepath")
#         for i in range(len(page)):
#             page[i] = Sanitize(page[i],par)
#     if txttype == "txt":
#         text = txtinp()
#         Sanitize(text,par)


par = ["SEARCH"]
sent = pdftoTxt()

Sanitize(sent,par)

# displayCount(sent)



# arr = [0]*10
# arr[0]+=2
# print(arr)

