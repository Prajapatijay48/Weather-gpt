"""
Chat API Endpoint
Context-aware AI meteorological conversational assistant.
"""
import logging
from fastapi import APIRouter, HTTPException

try:
    from backend.models import ChatRequest, ChatResponse
    from backend.services import ai_service
except (ImportError, ValueError):
    try:
        from ..models import ChatRequest, ChatResponse
        from ..services import ai_service
    except (ImportError, ValueError):
        from models import ChatRequest, ChatResponse
        from services import ai_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/chat", tags=["Chat & AI"])


@router.post(
    "",
    response_model=ChatResponse,
    summary="Ask WeatherGPT AI Assistant",
    description="Submit a natural-language weather question. The assistant injects verified backend context to answer accurately without hallucination."
)
async def ask_weather_gpt(request: ChatRequest):
    if not request.message or not request.message.strip():
        raise HTTPException(
            status_code=400,
            detail="User message cannot be blank. Please enter a weather question or topic."
        )

    try:
        response = await ai_service.generate_response(
            user_message=request.message.strip(),
            active_location=request.location,
            conversation_history=request.conversation_history,
            persona=request.persona
        )
        return response
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error in Chat AI endpoint: {e}", exc_info=True)
        # Return a graceful, well-formed ChatResponse matching schema instead of unhandled 500
        return ChatResponse(
            success=False,
            message=f"WeatherGPT conversational assistant encountered an issue: {str(e)}. Real-time weather telemetry endpoints remain operational.",
            location=request.location or "Ahmedabad",
            weather_context_used=False,
            intent=None,
            source="WeatherGPT Resilience Engine"
        )
