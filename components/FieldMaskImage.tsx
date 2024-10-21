import { useSignal } from "@preact/signals";
import Icon from "./Icon.tsx";
import { RotateCcw } from "lucide-preact";
import type { JSX } from "preact/jsx-runtime";
import { useEffect, useRef } from "preact/hooks";
import FieldLabel from "./FieldLabel.tsx";
import FieldHelp, { type Helper } from "./FieldHelp.tsx";

type EventHandler<T extends EventTarget> = JSX.GenericEventHandler<T>;
type MouseEventHandler<T extends EventTarget> = JSX.MouseEventHandler<T>;

interface Props {
    name: string;
    helpers: Helper[];
    onChange: (name: string, value: Blob) => void;
}

export default function FieldMaskImage(props: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerWidth = useSignal(0);
    const containerHeight = useSignal(0);
    const isDrawing = useSignal(false);
    const lastX = useSignal(0);
    const lastY = useSignal(0);

    const handleContainerLoad = () => {
        if (!containerRef.current) return;
        containerWidth.value = containerRef.current.offsetWidth;
    };

    const handleImageLoad: EventHandler<HTMLImageElement> = (event) => {
        if (!event.currentTarget) return;
        const target = event.currentTarget;
        const imageAspectRatio = target.naturalWidth / target.naturalHeight;
        containerHeight.value = containerWidth.value / imageAspectRatio;
    };

    const resetCanvas = () => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 20;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
        return ctx;
    };

    const handleResetClick = resetCanvas;

    const startDrawing: MouseEventHandler<HTMLCanvasElement> = (event) => {
        isDrawing.value = true;
        [lastX.value, lastY.value] = [event.offsetX, event.offsetY];
    };

    const draw: MouseEventHandler<HTMLCanvasElement> = (event) => {
        if (!event.target) return;
        if (!isDrawing.value) return;
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.moveTo(lastX.value, lastY.value);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        [lastX.value, lastY.value] = [event.offsetX, event.offsetY];
    };

    const stopDrawing = () => {
        isDrawing.value = false;
    };

    const handleMaskChange = () => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        canvas.toBlob((blob) => {
            if (!blob) return;
            props.onChange(props.name, blob);
        });
    };

    useEffect(() => {
        if (!containerHeight.value) return;
        resetCanvas();
    }, [containerHeight.value]);

    useEffect(() => {
        handleMaskChange();
    }, [lastX.value, lastY.value]);

    useEffect(() => {
        handleContainerLoad();
    }, []);

    return (
        <div>
            <FieldLabel text="Mask image" required={true} />
            <div
                class="rounded-lg bg-slate-500 inline-flex gap-1 justify-between items-center px-3 cursor-pointer text-slate-300 mb-2"
                onClick={handleResetClick}
            >
                <Icon Icon={RotateCcw} size={15} />
                <span class="text-sm">Reset mask</span>
            </div>
            <div
                class="relative"
                ref={containerRef}
                style={{
                    minHeight: `${containerHeight.value}px`,
                }}
            >
                <img
                    class="absolute top-0 left-0 h-auto"
                    src="https://picsum.photos/800/600"
                    width={containerWidth.value}
                    onLoad={handleImageLoad}
                />
                <canvas
                    ref={canvasRef}
                    class="absolute top-0 left-0"
                    width={containerWidth.value}
                    height={containerHeight.value}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseOut={stopDrawing}
                >
                </canvas>
            </div>
            <FieldHelp
                helpers={props.helpers}
            />
        </div>
    );
}
