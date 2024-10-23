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
        if (typeof value === "number") return value.toFixed(2);
        return String(value);
    };
    const categoryNames = Object.keys(props.flags) as unknown as CategoryName[];
    const categories = categoryNames.map((categoryName) => {
        return [
            categoryName,
            props.flags[categoryName as CategoryName],
            props.scores[categoryName as CategoryName],
        ];
    });
    return (
        <div class="overflow-scroll max-w-[calc(100vw_-_56px)]">
            <p class="text-slate-300 mb-2">
                Flagged: <span>{toValue(props.flagged)}</span>
            </p>
            <table class="text-slate-100">
                <thead class="text-left bg-slate-900">
                    <tr class="">
                        <th class="px-2 py-2 font-medium rounded-tl-xl">
                            Category
                        </th>
                        <th class="px-2 py-2 font-medium">Flagged</th>
                        <th class="px-2 py-2 font-medium rounded-tr-xl">
                            Score
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr>
                            {category.map((value) => (
                                <td class="px-2 py-1 border-b border-slate-700">
                                    {toValue(value)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
