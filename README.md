# 🌎 GeoIP API — Express + CORS

Uma API simples em Node.js para identificar **cidade, estado e país** do visitante usando o IP.

## 🚀 Tecnologias

- **Node.js**
- **Express**
- **CORS**
- **geoip-lite** (banco local de geolocalização por IP)

---

## 📦 Instalação

```bash
npm install
```

---

## ▶️ Executar a API

```bash
npm start
```

A API rodará em:

```
http://localhost:3000
```

---

## 📡 Endpoints

### 🟦 GET /

Retorna status simples da API.

```
GET http://localhost:3000/
```

Resposta:

```json
{
  "message": "GeoIP API online"
}
```

---

### 🟩 GET /geo

Retorna informações do **IP do visitante** automaticamente.

```
GET http://localhost:3000/geo
```

Resposta:

```json
{
  "ip": "187.x.x.x",
  "city": "São Paulo",
  "state": "SP",
  "country": "BR"
}
```

---

### 🟧 GET /geo/:ip

Retorna a geolocalização de um IP específico.

```
GET http://localhost:3000/geo/8.8.8.8
```

Resposta:

```json
{
  "ip": "8.8.8.8",
  "city": "Mountain View",
  "state": "CA",
  "country": "US"
}
```

---

## 📁 Estrutura do Projeto

```
geoip-api/
├── index.js
├── package.json
└── README.md
```

---

## 📄 Licença

Livre para uso e modificação.
