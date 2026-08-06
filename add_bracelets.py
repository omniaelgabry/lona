import json
import random

urls = [
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqVRcRKStzTIh2l0srQixq6BbgvNGd9kWOHSoY",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq6N2kgWuSK3oml7D6HiwdG54Tnft9EkxyNZVj",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqjqS7JWb1MnVRGbFv8PslhZJSOfDtco4k6BWu",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqd6k974HJrDHGzf7vBosYX8MW9cpNgk3OuRnF",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqXMaOS56BfOxkT4nAu10WaPpDUZLYR8H357zN"
]

with open('/Users/ahmedelgabry/Desktop/lona/luna-app/public/products.json', 'r') as f:
    products = json.load(f)

max_id = max([int(p['id']) for p in products])

for i, url in enumerate(urls):
    new_id = str(max_id + 1 + i)
    products.append({
        "id": new_id,
        "name": f"Luna Bracelet {i+1}",
        "category": "Bracelets",
        "price": round(random.uniform(50.0, 500.0), 2),
        "image": url,
        "rating": round(random.uniform(4.0, 5.0), 1),
        "bestseller": random.choice([True, False]),
        "newArrival": True,
        "description": "An exquisite luxury piece from our Bracelets collection."
    })

with open('/Users/ahmedelgabry/Desktop/lona/luna-app/public/products.json', 'w') as f:
    json.dump(products, f, indent=2)

with open('/Users/ahmedelgabry/Desktop/lona/luna-app/new_products.json', 'w') as f:
    json.dump(products, f, indent=2)
