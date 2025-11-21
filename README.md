# GeoLog – API de Geolocalização por IP

Uma API simples em **Node.js + Express + CORS** que identifica cidade, estado e país com base no **IP do provedor de internet (ISP)** usando GeoIP.

---

## 🚀 Funcionalidades

- 📌 Detecta IP do visitante automaticamente
- 🌎 Retorna **cidade, estado e país**
- 🔧 Endpoint para consultar **IP manualmente**
- 📡 Dados baseados em **GeoIP (localização aproximada)**
- 🛡 Suporte a CORS

---

## 📥 Instalação

```bash
npm install
npm start
```

---

## 📡 Endpoints

### 🔹 `GET /`
Retorna o status da API.

### 🔹 `GET /geo`
Retorna as informações de geolocalização do visitante.

**Exemplo de retorno:**
```json
{
  "ip": "177.37.148.4",
  "city": "Fortaleza",
  "state": "CE",
  "country": "BR"
}
```

### 🔹 `GET /geo/:ip`
Consulta qualquer IP manualmente.

**Exemplo:**
```
/geo/8.8.8.8
```

---

## 📌 Nota importante sobre GeoIP
Esta API usa **geolocalização baseada no provedor (ISP)**.
Isso significa que:

- A cidade e o estado retornados são onde o **provedor registrou o bloco de IPs**;
- **Não** representa a localização exata da pessoa;
- É o funcionamento normal de **todas as APIs GeoIP**, incluindo:
  - MaxMind
  - ipinfo
  - ipstack
  - ipgeolocation

GeoIP **não usa GPS** e não mostra:
❌ Rua
❌ Bairro
❌ Coordenadas exatas
❌ Endereço da casa

---

## 🛠 Tecnologias usadas
- Node.js
- Express
- CORS
- geoip-lite

---

## 📤 Deploy no Railway
1. Crie um projeto no Railway
2. Conecte seu repositório GitHub
3. Railway detecta Node.js automaticamente
4. Use o comando:

```
npm start
```

5. Ao finalizar, o Railway gera uma URL pública

---

## 📄 Licença
MIT License
