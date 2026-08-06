import re

with open('/Users/ahmedelgabry/Desktop/lona/luna-app/src/main.js', 'r') as f:
    content = f.read()

with open('/Users/ahmedelgabry/Desktop/lona/luna-app/new_products.json', 'r') as f:
    products_json = f.read()

# Replace the products array inside window.store
pattern = r"products:\s*\[.*?\]\n*\};"
replacement = f"products: {products_json}\n}};"

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('/Users/ahmedelgabry/Desktop/lona/luna-app/src/main.js', 'w') as f:
    f.write(new_content)
