import { useState } from "react";
import Button from "./Button";
interface Props {
  mood?: string;
}
export default function App() {
  const [tags, setTags] = useState([
    { id: 1, text: "Happy" },
    { id: 2, text: "Cheerful" },
    { id: 3, text: "Calm" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isCompactView, setIsCompactView] = useState(false);

  // States for the Find & Replace feature
  const [findValue, setFindValue] = useState("");
  const [replaceValue, setReplaceValue] = useState("");

  const handleAddTag = ({ mood }: Props) => {
    var formattedInput = "";
    var trimmedMood = mood?.trim();
    if (trimmedMood) formattedInput = trimmedMood;
    else formattedInput = inputValue.trim();
    if (!formattedInput) return;

    const isDuplicate = tags.some(
      (tag) => tag.text.toLowerCase() === formattedInput.toLowerCase(),
    );
    if (isDuplicate) return;

    setTags([...tags, { id: crypto.randomUUID(), text: formattedInput }]);
    setInputValue("");
  };

  // Swaps all instances of a target mood with a new mood name
  const handleTransformMood = () => {
    const target = findValue.trim().toLowerCase();
    const replacement = replaceValue.trim();

    if (!target || !replacement) return;

    setTags(
      tags.map((tag) =>
        tag.text.toLowerCase() === target ? { ...tag, text: replacement } : tag,
      ),
    );

    // Clear the substitution fields after execution
    setFindValue("");
    setReplaceValue("");
  };

  const handleRemoveTag = (idToRemove) => {
    setTags(tags.filter((tag) => tag.id !== idToRemove));
  };

  const handleClearAll = () => {
    setTags([]);
  };

  return (
    <div className="container py-5">
      <div
        className="card mx-auto shadow-lg bg-dark text-light border-secondary"
        style={{ maxWidth: "450px", borderRadius: "1rem" }}
      >
        <div className="card-body p-4">
          {/* Header section with Layout Toggle Button */}
          <div className="d-flex justify-content-between align-items-start mb-4">
            <div>
              <h1 className="h3 mb-1 text-info fw-bold">Mood Tracker</h1>
              <p className="small text-secondary m-0">
                Capture your current vibe.
              </p>
            </div>

            <button
              onClick={() => setIsCompactView(!isCompactView)}
              className={`btn btn-sm ${
                isCompactView ? "btn-outline-success" : "btn-outline-info"
              }`}
            >
              {isCompactView ? "⚡ Grid View" : "📱 List View"}
            </button>
          </div>

          {/* Quick Suggestions Section */}
          <div className="mb-4">
            <span
              className="text-uppercase text-secondary tracking-wider d-block mb-2"
              style={{ fontSize: "11px", fontWeight: "700" }}
            >
              Quick Suggestions
            </span>
            <div className="d-flex flex-wrap gap-2">
              {["Calm", "Energetic", "Focused", "Inspired", "Chill"].map(
                (mood) => (
                  <button
                    key={mood}
                    onClick={() => handleAddTag({ mood })}
                    className="btn btn-sm btn-secondary bg-opacity-25 border-secondary text-light py-1 px-2.5"
                  >
                    + {mood}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Core Input section */}
          <div className="input-group mb-4 shadow-sm border border-secondary rounded">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
              placeholder="How do you feel right now?..."
              className="form-control bg-transparent text-light border-0 py-2 placeholder-secondary"
            />
            <Button
              text="Add Vibe"
              onClick={handleAddTag}
              className="btn btn-info px-4 fw-medium text-dark"
            />
          </div>

          {/* Find and Replace Transformation Control Deck */}
          <div className="p-3 bg-secondary bg-opacity-10 border border-secondary rounded mb-4">
            <span
              className="text-uppercase text-info d-block mb-2 fw-bold"
              style={{ fontSize: "11px" }}
            >
              Transform a Mood
            </span>
            <div className="row g-2 mb-2">
              <div className="col-6">
                <input
                  type="text"
                  value={findValue}
                  onChange={(e) => setFindValue(e.target.value)}
                  placeholder="Find vibe (e.g. Happy)"
                  className="form-control form-control-sm bg-dark text-light border-secondary"
                />
              </div>
              <div className="col-6">
                <input
                  type="text"
                  value={replaceValue}
                  onChange={(e) => setReplaceValue(e.target.value)}
                  placeholder="Replace with..."
                  className="form-control form-control-sm bg-dark text-light border-secondary"
                />
              </div>
            </div>
            <button
              onClick={handleTransformMood}
              disabled={!findValue.trim() || !replaceValue.trim()}
              className="btn btn-sm btn-outline-info w-full text-center d-block w-100 fw-semibold"
            >
              🔄 Convert Matching Moods
            </button>
          </div>

          {/* Active Tags List Container */}
          <div className="pt-3 border-top border-secondary">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span
                className="text-uppercase text-secondary"
                style={{ fontSize: "11px", fontWeight: "700" }}
              >
                Active Vibes ({tags.length})
              </span>
              {tags.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="btn btn-link btn-sm text-danger p-0 text-decoration-none"
                >
                  Clear All
                </button>
              )}
            </div>

            {tags.length === 0 ? (
              <div className="text-center py-4 border border-dashed border-secondary rounded bg-dark bg-opacity-50">
                <p className="small text-secondary italic m-0">
                  Your mind is an empty canvas.
                </p>
              </div>
            ) : (
              /* Conditional Bootstrap Layout */
              <div
                className={
                  isCompactView
                    ? "d-flex flex-column gap-2 overflow-auto"
                    : "d-flex flex-wrap gap-2 overflow-auto"
                }
                style={{ maxHeight: "180px" }}
              >
                {tags.map((tag) => (
                  <div
                    key={tag.id}
                    className={`d-flex align-items-center justify-content-between border border-secondary bg-secondary bg-opacity-25 ${
                      isCompactView
                        ? "w-100 px-3 py-2 rounded-3"
                        : "px-3 py-1.5 rounded-pill"
                    }`}
                  >
                    <span
                      className="fw-medium text-light"
                      style={{ fontSize: "14px" }}
                    >
                      {tag.text}
                    </span>
                    <button
                      onClick={() => handleRemoveTag(tag.id)}
                      className="btn-close btn-close-white ms-2 text-danger opacity-75 hover-opacity-100"
                      style={{ fontSize: "10px", boxShadow: "none" }}
                      aria-label={`Remove ${tag.text}`}
                    ></button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
