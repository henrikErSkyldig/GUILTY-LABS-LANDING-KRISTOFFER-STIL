"use client";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="text-2xl font-light mb-4 tracking-wide text-foreground">
              guilty labs ._*
            </div>
            <p className="text-base font-light mb-4 leading-relaxed text-muted-foreground">
              Guilty Labs hjelper startups og innovative selskaper med å gå fra
              idé til MVP på 6 uker. Vi er din partner for rask og effektiv
              produktutvikling.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 bg-muted rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
          {["Tjenester", "Ressurser"].map((category) => (
            <div key={category}>
              <h3 className="text-lg font-normal mb-4 tracking-wide text-foreground">
                {category}
              </h3>
              <ul className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-base font-light text-muted-foreground hover:text-primary transition-colors"
                    >
                      {`${category} ${i + 1}`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base font-light text-muted-foreground mb-4 md:mb-0">
            © 2024 Guilty Labs. Alle rettigheter forbeholdt.
          </p>
          <div className="flex space-x-6">
            {["Personvern", "Vilkår", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-base font-light text-muted-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
