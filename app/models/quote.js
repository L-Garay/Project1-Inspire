export default class Quote {
  constructor(data) {
    this.id = data.quote.id;
    this.author = data.quote.author;
    this.body = data.quote.body;
  }

  get quoteTemplate() {
    return `
    <div class="card quote-card">
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p class="quote-body">${this.body}</p>
          <footer class="blockquote-footer">Probably said by<cite title="Source Title"> ${this.author}</cite></footer>
        </blockquote>
      </div>
    </div>
    `;
  }
}
