<div class="card">
  <slot></slot>
</div>

<style>
  .card {
    background-color: #fff;
    color: #333;
    border-radius: 0.95rem;
    padding: 40px 50px;
    margin: 20px 0;
    position: relative;
    box-shadow: 0 0 8px rgb(77, 75, 75);
  }

  @media (max-width: 600px) {
    .card {
        margin: 20px 10px;
    }
  }
</style>
