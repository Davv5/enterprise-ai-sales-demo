/* Founder’s Desk V0 — static, share-safe update translator. No tracking, storage, account data, or external calls. */
const updates = {
  brief: {
    number: "01 / 04", state: "LIVE", kind: "live",
    title: "The demo now opens with an operating day, not a workflow list.",
    why: "A buyer should first feel the operating responsibility the product can help carry—not evaluate another generic software dashboard.",
    ready: "The partner can open the Daily Operating Brief and walk a prospect from the day’s priorities into a governed workflow moment.",
    truth: "The operating day is fictional. There is no client data, AI model, or live message delivery behind the demonstration."
  },
  workflow: {
    number: "02 / 04", state: "LIVE", kind: "live",
    title: "Three governed moments now prove the product’s control model.",
    why: "Routine coverage, scarce inventory, and policy-sensitive communication each expose a different responsibility that must not quietly become autonomous.",
    ready: "The partner can show how the product prepares work, preserves boundaries, routes exceptions, and names the accountable person.",
    truth: "Price, quantity, allocation, terms, policy interpretation, and sensitive communication remain human decisions."
  },
  delivery: {
    number: "03 / 04", state: "LIVE", kind: "live",
    title: "There is one reliable public link for a real conversation.",
    why: "A live pitch needs a stable product address, not a development computer, a local URL, or a technical handoff.",
    ready: "The current demo opens from a public address and verified GitHub changes update that address automatically.",
    truth: "The public link hosts a static demo. It is not a customer workspace and it does not expose live operating data."
  },
  proof: {
    number: "04 / 04", state: "NEEDS PROOF", kind: "proof",
    title: "We need market evidence before we build a production core.",
    why: "A serious product should be built around a real buyer responsibility, not around a generic desire for “AI.”",
    ready: "The partner can use the demo to learn which workflow creates urgency and where a real team would require a person to remain accountable.",
    truth: "No buyer conversations, pilots, integrations, ROI claims, or production commitments are represented here as complete."
  }
};

const detail = {
  state: document.querySelector("#detail-state"),
  count: document.querySelector("#detail-count"),
  title: document.querySelector("#detail-title"),
  why: document.querySelector("#detail-why"),
  ready: document.querySelector("#detail-ready"),
  truth: document.querySelector("#detail-true")
};

document.querySelectorAll(".update").forEach((button) => {
  button.addEventListener("click", () => {
    const update = updates[button.dataset.update];
    document.querySelectorAll(".update").forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", item === button ? "true" : "false");
    });
    detail.state.textContent = update.state;
    detail.state.className = `state ${update.kind}`;
    detail.count.textContent = update.number;
    detail.title.textContent = update.title;
    detail.why.textContent = update.why;
    detail.ready.textContent = update.ready;
    detail.truth.textContent = update.truth;
  });
});
