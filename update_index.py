import re

with open('/Users/ahmedelgabry/Desktop/lona/luna-app/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_categories = """
      <a href="shop.html?category=handbags" class="group relative h-96 overflow-hidden rounded-xl card block">
        <img src="https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mq9TFnTGXFYNPRzr4S6yJE8ua0doDZBnGAhceK" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Handbags">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute bottom-8 left-8">
          <h3 class="text-3xl font-serif text-white mb-2">Handbags</h3>
          <span class="text-luxury-gold flex items-center group-hover:translate-x-2 transition-transform">Explore <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
        </div>
      </a>
      
      <a href="shop.html?category=bracelets" class="group relative h-96 overflow-hidden rounded-xl card block">
        <img src="https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqVRcRKStzTIh2l0srQixq6BbgvNGd9kWOHSoY" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Bracelets">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute bottom-8 left-8">
          <h3 class="text-3xl font-serif text-white mb-2">Bracelets</h3>
          <span class="text-luxury-gold flex items-center group-hover:translate-x-2 transition-transform">Explore <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
        </div>
      </a>
      
      <a href="shop.html?category=watches" class="group relative h-96 overflow-hidden rounded-xl card block">
        <img src="https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqVSceeOzTIh2l0srQixq6BbgvNGd9kWOHSoYw" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Watches">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div class="absolute bottom-8 left-8">
          <h3 class="text-3xl font-serif text-white mb-2">Watches</h3>
          <span class="text-luxury-gold flex items-center group-hover:translate-x-2 transition-transform">Explore <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span>
        </div>
      </a>
    </div>
  </section>

  <!-- Banner Section -->
  <section class="py-12 px-4 max-w-7xl mx-auto">
    <div class="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-luxury">
      <img src="https://ynn787qihi.ufs.sh/f/Qj6TSP5Fj9mqNZODgRedDFtJQenCj36Xcw85KUaBsxM4ZEzP" alt="Promotional Banner" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700">
    </div>
  </section>
"""

content = content.replace("    </div>\n  </section>\n\n  <!-- Best Sellers -->", new_categories + "\n  <!-- Best Sellers -->")

with open('/Users/ahmedelgabry/Desktop/lona/luna-app/index.html', 'w', encoding='utf-8') as f:
    f.write(content)
