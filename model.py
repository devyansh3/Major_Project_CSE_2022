import spacy
from spacy import displacy
import pdfplumber

nlp = spacy.load('en_core_web_sm')


# TAKE DOC INPUT HERE


with pdfplumber.open(r'/Users/sompande/Documents/KPMG_SomPande/Ann3.pdf') as pdf:
    first_page = pdf.pages[0]
    ex1 = first_page.extract_text()

# pdfobj = open('/Users/sompande/Documents/KPMG_SomPande/Bonafide.pdf','rb')

# pdfread = pdfplumber.open('/Users/sompande/Documents/KPMG_SomPande/Bonafide.pdf','rb')
# page = pdfread.pages(0)
# ex1 = pdfread.extract_text()
# ex1 = "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).The series was originally published in English by Bloomsbury in the United Kingdom and Scholastic Press in the United States. All versions around the world are printed by Grafica Veneta in Italy.[1] A series of many genres, including fantasy, drama, coming-of-age fiction, and the British school story (which includes elements of mystery, thriller, adventure, horror, and romance), the world of Harry Potter explores numerous themes and includes many cultural meanings and references.[2] According to Rowling, the main theme is death.[3] Other major themes in the series include prejudice, corruption, and madness.[4]"

docx1 = nlp(ex1)

print(docx1)



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



def selectParam(doc):
    print("Choose redaction parameters : ")
    print(" 1. PERSON\n 2. ORGANISATION\n 3. TIME\n 4. GPE\n 5.CARDINAL ")
    ans = list((input().strip().split(' ')))
    Sanitize(doc,ans)





#CHOOSE REDACTION TYPE HERE

print("Select Redaction type : ")

print("Cursor Redaction (press 0) ")
print("Entity Redaction (press 1) ")

inp = int(input())

if inp == 0:
    # Cursor redaction function call
    pass
elif  inp == 1:
    selectParam(docx1)

else : 
    print("Invalid Entry")







# # SELECTION PARAMETERS HERE
# print("Choose redaction parameters : ")
# print(" 1. PERSON\n 2. ORGANISATION\n 3. TIME\n 4. GPE\n 5.CARDINAL ")
# ans = list((input().strip().split(' ')))

# print(ans)









# TESTING
for ent in docx1.ents:
    print(ent.text,ent.label_)






