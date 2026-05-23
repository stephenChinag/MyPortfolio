export default function HireForm({
  sectionRef,
  form,
  setForm,
  formSent,
  formLoading,
  formError,
  onSubmit,
}) {
  return (
    <div
      ref={sectionRef}
      className="wrap section"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="hire-grid">
        <div className="reveal">
          <div className="sec-num">05 — Hire Me</div>
          <div className="sec-title">
            Start a<br />
            project
            <br />
            <em style={{ fontStyle: "italic", color: "var(--fg3)" }}>
              together.
            </em>
          </div>
          <p className="contact-sub" style={{ marginTop: "1.25rem" }}>
            Tell me what you're building and I'll get back to you within 24
            hours.
          </p>
        </div>
        <form
          className="hire-form reveal"
          onSubmit={onSubmit}
          style={{ transitionDelay: "0.1s" }}
        >
          <div
            className="hire-row-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div className="hire-field">
              <label className="hire-label">Your Name</label>
              <input
                className="hire-input"
                type="text"
                required
                placeholder="John Doe"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
              />
            </div>
            <div className="hire-field">
              <label className="hire-label">Company</label>
              <input
                className="hire-input"
                type="text"
                required
                placeholder="Acme Inc."
                value={form.company}
                onChange={(e) =>
                  setForm((f) => ({ ...f, company: e.target.value }))
                }
              />
            </div>
          </div>
          <div
            className="hire-row-2col"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div className="hire-field">
              <label className="hire-label">Your Email</label>
              <input
                className="hire-input"
                type="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
            </div>
            <div className="hire-field">
              <label className="hire-label">Budget (USD)</label>
              <input
                className="hire-input"
                type="text"
                placeholder="e.g. $3,000 – $8,000"
                value={form.budget}
                onChange={(e) =>
                  setForm((f) => ({ ...f, budget: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="hire-field">
            <label className="hire-label">Project Brief</label>
            <textarea
              className="hire-input hire-textarea"
              required
              placeholder="Describe the project — scope, timeline, goals…"
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
            />
          </div>
          {formSent ? (
            <div className="hire-sent">
              <span>✓</span> Message sent! I'll get back to you within 24 hours.
            </div>
          ) : formError ? (
            <div className="hire-error">
              <span>✕</span> Something went wrong. Please email me directly.
            </div>
          ) : (
            <button
              type="submit"
              className="btn-dark hire-submit"
              disabled={formLoading}
            >
              {formLoading ? <span className="spinner" /> : "Send Message →"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
