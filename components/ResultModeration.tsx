import type OpenAI from "openai";

interface Props {
    flagged: boolean;
    flags: OpenAI.Moderation["categories"];
    scores: OpenAI.Moderation["category_scores"];
}

type CategoryName = keyof OpenAI.Moderation["categories"];

export default function ResultModeration(props: Props) {
    const toValue = (value: unknown) => {
        if (typeof value === "boolean") return value ? "yes" : "no";
        return String(value);
    };
    const categoryNames = Object.keys(props.flags) as unknown as CategoryName[];
    const categories = categoryNames.map((categoryName) => {
        return [
            categoryName,
            toValue(props.flags[categoryName as CategoryName]),
            props.scores[categoryName as CategoryName],
        ];
    });
    return (
        <div>
            <p>
                Flagged: <span>{toValue(props.flagged)}</span>
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Flagged</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr>
                            {category.map((value) => <td>{value}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
