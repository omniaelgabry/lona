import json
import random

earrings = [
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqitV6XEwNc4obmAzslt9pGhfIK8DjuayFdeSR",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq6N7iXVaSK3oml7D6HiwdG54Tnft9EkxyNZVj",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqdyPmtgJrDHGzf7vBosYX8MW9cpNgk3OuRnFA",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq78KAac2LqlF1NER45BpGbHhes68K0wj7ndf9",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqAp05Za8SeHwpK60XQ8RsO5xPhIYCWzB7qTcm",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqNnLQ1oIedDFtJQenCj36Xcw85KUaBsxM4ZEz",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq0uPix4VU5aulgToKzAPGDOrJ3bS1wjEC78eI"
]

necklaces = [
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqL3YvSk00ponaXOdrEfKbc782CgiNDTsYw4hl",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqHvDbgn8NWxk5QMT8qmKJCiDSvrP3ghfjXsZo",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq4inCNp3kibRS6ZsCgu5FvtWcXhOmHKTf2PJl",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqbjLnBaimoPfCY9KagJrVnOFAtp57DGERiLhH",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqftjVt8hW5eMIFL2TXl7dCyi1nUPBtO38kv4Q",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqjBDS29b1MnVRGbFv8PslhZJSOfDtco4k6BWu",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqZ6TtGLOPMsdOo1cyemFv8K3zbpqNXWJaQ79k",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqNn2P8nPedDFtJQenCj36Xcw85KUaBsxM4ZEz"
]

rings = [
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq8Nqrc6s0GbPji7192ACswTmfQ8uU6FyIahJW",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqwLu2A59TZDa7jGic0gCOWNm95oUJzflnH3KL",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqDd32emgnlVHAjkwho31eTMO4cu0UImLt9iaW",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqUnsF6zRkeGQ7mtg8JEoyaXh1RI9uWLHwB0Ms",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq1QdBPUjPWDljrednSwyXHIgUqKQFu2GOpoCi",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq5bCheAF1o5qui7rMpZSmhAcv2tfQ49aL0lRT",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq5Dkkru1o5qui7rMpZSmhAcv2tfQ49aL0lRTP",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqhgW6QjtZKDCqy7zFrvX5GiucQkeE1xwI4JUf",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqT7MmLaZ8i4kzxrVlS6ZpYnodAJv2gNeuwhcy"
]

watches = [
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqVSceeOzTIh2l0srQixq6BbgvNGd9kWOHSoYw",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq52OP3C1o5qui7rMpZSmhAcv2tfQ49aL0lRTP",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqDayN4rgnlVHAjkwho31eTMO4cu0UImLt9iaW",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqgUh5eeMotwYQqSAU69710bCXOyfIuLnJcvMj",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqRdjrqophsQ4BHmpTMCzkbOSXGDZx26vV831o"
]

handbags = [
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq9TFnTGXFYNPRzr4S6yJE8ua0doDZBnGAhceK",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqGUVmtHF7xFCNHRI5vudXn82csPlVLakjZtQr",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqp3MmtOKoYC4y1TKmHauNbSijPZwgFAM2c8dt",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq7zo4hF2LqlF1NER45BpGbHhes68K0wj7ndf9",
    "https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqZpBaYtOPMsdOo1cyemFv8K3zbpqNXWJaQ79k"
]

products = []
id_counter = 1

def add_products(urls, category, name_prefix):
    global id_counter
    for i, url in enumerate(urls):
        products.append({
            "id": str(id_counter),
            "name": f"Luna {name_prefix} {i+1}",
            "category": category,
            "price": round(random.uniform(50.0, 500.0), 2),
            "image": url,
            "rating": round(random.uniform(4.0, 5.0), 1),
            "bestseller": random.choice([True, False]),
            "newArrival": random.choice([True, False]),
            "description": f"An exquisite luxury piece from our {category} collection."
        })
        id_counter += 1

add_products(earrings, "Earrings", "Earring")
add_products(necklaces, "Necklaces", "Necklace")
add_products(rings, "Rings", "Ring")
add_products(watches, "Watches", "Watch")
add_products(handbags, "Handbags", "Handbag")

# Make sure we have exactly 4 bestsellers for the home page layout
bestsellers_count = sum(1 for p in products if p["bestseller"])
if bestsellers_count < 4:
    for p in products[:4]:
        p["bestseller"] = True

with open("/Users/ahmedelgabry/Desktop/lona/luna-app/new_products.json", "w") as f:
    json.dump(products, f, indent=2)
