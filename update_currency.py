import os
import glob

files = glob.glob('/Users/ahmedelgabry/Desktop/lona/luna-app/*.html')

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('$${', 'EGP ${')
    content = content.replace('>$0.00<', '>EGP 0.00<')
    content = content.replace("'$0.00'", "'EGP 0.00'")
    content = content.replace("'$' + ", "'EGP ' + ")
    
    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

